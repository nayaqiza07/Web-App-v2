<?php

namespace App\Services\Order;

use Exception;
use App\Enums\OrderStatus;
use App\Enums\PaymentStatus;
use App\Exceptions\EmptyCartException;
use App\Http\Requests\Order\StoreOrderRequest;
use App\Models\CartItem;
use App\Models\Order;
use App\Repositories\Order\OrderRepository;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Auth;
use LaravelEasyRepository\Service;
use Illuminate\Support\Str;

class OrderServiceImplement extends Service implements OrderService {

    /**
     * set title message api for CRUD
     * @param string $title
     */
     protected string $title = "";
     /**
     * uncomment this to override the default message
     * protected string $create_message = "";
     * protected string $update_message = "";
     * protected string $delete_message = "";
     */

     /**
     * don't change $this->mainRepository variable name
     * because used in extends service class
     */
     protected OrderRepository $mainRepository;

    public function __construct(OrderRepository $mainRepository)
    {
      $this->mainRepository = $mainRepository;
    }

    protected function generateUniqueOrderCode(): string
    {
        $code = '#' . now()->format('Ymd') . Str::upper(Str::random(4));
        // Loop hingga menemukan kode yang unik di database
        while (Order::where('order_code', $code)->exists()) {
            $code = '#' . now()->format('Ymd') . Str::upper(Str::random(4));
        }
        return $code;
    }

    public function getAllOrders(): Collection
    {
      return $this->mainRepository->getAllDataOrder();
    }

    public function createOrder(StoreOrderRequest $data): Order
    {
      $user = Auth::user();
      $cartItems = CartItem::where('user_id', $user->id)->get();

      if ($cartItems->isEmpty()){
          throw new EmptyCartException();
      }

      $subtotal = $cartItems->sum(fn ($item) => ($item->quantity ?? 1) * ($item->product->price ?? 0));
      $shippingCost = 100000;
      $total = $subtotal + $shippingCost;
      $orderData = [
          'user_id'           => $user->id,
          'address_id'        => $data->validated('address_id'),
          'order_code'        => $this->generateUniqueOrderCode(),
          'order_status'      => OrderStatus::PENDING->value,
          'subtotal'          => $subtotal,
          'shipping_cost'     => $shippingCost,
          'total'             => $total,
      ];

      $orderItems = [];
      foreach ($cartItems as $cartItem) {
        $product = $cartItem->product;

        if (!$product || $product->stock < $cartItem->quantity) {
          throw new Exception('Product Stock ' . ($product->name ?? 'Not Found') . ' insufficient. Available stock: ' . ($product->stock ?? 0));
        }

        $orderItems[] = [
          'product_id'        => $product->id,
          'product_name'      => $product->name,
          'quantity'          => $cartItem->quantity,
          'unit_price'        => $product->price,
          'subtotal'          => $cartItem->quantity * $product->price
        ];

        $product->decrement('stock', $cartItem->quantity);
      }

      $order =  $this->mainRepository->createDataOrder($orderData, $orderItems);

      $this->mainRepository->deleteCartItemsByUserId($user->id);

      return $order;
    }

    public function deleteOrder(Order $order): ?bool
    {
      if ($order->user_id !== Auth::id()) {
        abort(403, 'Unauthorize action.');
      }
      
      return $this->mainRepository->deleteDataOrder($order);
    }
}
