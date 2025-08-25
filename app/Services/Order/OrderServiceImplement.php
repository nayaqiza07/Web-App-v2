<?php

namespace App\Services\Order;

use App\Enums\OrderStatus;
use App\Enums\PaymentStatus;
use App\Http\Requests\Order\StoreOrderRequest;
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

    // protected function generateUniqueOrderCode(): string
    // {
    //     $code = 'ORD-' . now()->format('Ymd-His') . '-' . Str::upper(Str::random(4));
    //     // Loop hingga menemukan kode yang unik di database
    //     while (Order::where('code', $code)->exists()) {
    //         $code = 'ORD-' . now()->format('Ymd-His') . '-' . Str::upper(Str::random(4));
    //     }
    //     return $code;
    // }

    public function getAllOrders(): Collection
    {
      return $this->mainRepository->getAllData();
    }

    public function createOrder(StoreOrderRequest $data): Order
    {
      $user = Auth::user();
      $cartItems = $user->id->cartItems()->with('product')->get();

      if ($cartItems->isEmpty()){
          throw new \Exception('Your Cart is Empty');
      }

      $subtotal = $cartItems->sum(fn ($item) => $item->quantity * ($item->product->price ?? 0));
      $shippingCost = 100000;
      $total = $subtotal + $shippingCost;

      $orderData = [
          'user_id'           => $user->id,
          'address_id'        => $data->validated('address_id'),
          'code'              => Order::generateCode(),
          'order_status'      => OrderStatus::PENDING,
          'payment_status'    => PaymentStatus::UNPAID,
          'payment_method'    => $data->validated('payment_method'),
          'subtotal'          => $subtotal,
          'shipping_cost'     => $shippingCost,
          'total'             => $total,
      ];

      return $this->mainRepository->createData($cartItems, $orderData);
    }

    public function deleteOrder(Order $order): ?bool
    {
      if ($order->user_id !== Auth::id()) {
        abort(403, 'Unauthorize action.');
      }
      
      return $this->mainRepository->deleteData($order);
    }
}
