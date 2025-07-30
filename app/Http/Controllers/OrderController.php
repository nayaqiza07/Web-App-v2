<?php

namespace App\Http\Controllers;

use App\Http\Requests\Order\DestroyOrderRequest;
use App\Http\Requests\Order\StoreOrderRequest;
use App\Models\Order;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OrderController extends Controller
{
    /**
     * Helper function untuk generate kode order yang unik.
     * Pastikan kode selalu unik.
     */
    protected function generateUniqueOrderCode(): string
    {
        $code = 'ORD-' . now()->format('Ymd-His') . '-' . Str::upper(Str::random(4));
        // Loop hingga menemukan kode yang unik di database
        while (Order::where('code', $code)->exists()) {
            $code = 'ORD-' . now()->format('Ymd-His') . '-' . Str::upper(Str::random(4));
        }
        return $code;
    }
    
    /**
     * Display the list of orders for the authenticated user as Customer
     * 
     * @return \Inertia\Response
     */

    /**
     * Store a new order for the authenticated user as Customer.
     *
     * @param \App\Http\Requests\Order\StoreOrderRequest $request
     * @return Illuminate\Http\RedirectResponse
     * @throws \Exception $e
     */
    public function store (StoreOrderRequest $request) {
        // Alur pembuatan order
        // 1. Pengguna menambahkan product ke dalam keranjang (membuat entri baru pada cart_items)
        // 2. Saat pengguna checkout, akan membuat entri baru di tabel orders
        // 3. Lalu yang awalnya ada pada cart_items akan ditambahkan entri baru di order_items (dan yang ada pada cart_items dihapus)

        $user = Auth::user();
        $cartItems = $user->id->cartItems()->with('product')->get();

        if ($cartItems->isEmpty()) {
            return redirect()->back()->with('error', 'Your cart is empty');
        }

        $subtotal = $cartItems->sum(function ($item) {
            return $item->quantity * ($item->product->price ?? 0);
        });
        $shippingCost = 100000;
        $total = $subtotal + $shippingCost;

        $orderData = [
            'user_id'           => $user->id,
            'address_id'        => $request->validated('address_id'),
            'code'              => $this->generateUniqueOrderCode(),
            'status'            => 'pending',
            'payment_method'    => $request->validated('payment_method'),
            'subtotal'          => $subtotal,
            'shipping_cost'     => $shippingCost,
            'total'             => $total,
        ];

        try {
            DB::transaction(function () use ($user, $cartItems, $orderData) {
                $order = $user->id->orders()->create($orderData);

                foreach ($cartItems as $cartItem) {
                    $product = $cartItem->product;

                    if (!$product || $product->stock < $cartItem->quantity) {
                        throw new \Exception('Product Stock ' . ($product->name ?? 'Not Found') . ' insufficient. Available stock: ' . ($product->stock ?? 0));
                    }

                    $order->orderItems->create = ([
                        'order_id'          => $order->id,
                        'product_id'        => $product->id,
                        'product_name'      => $product->name,
                        'quantity'          => $cartItem->quantity,
                        'price_snapshot'    => $product->price,
                    ]);

                    $product->decrement('stock', $cartItem->quantity);
                }

                $user->$cartItems()->delete();
            });

            return redirect()->back()->with('success', 'Order created successfully');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Failed to palce order: '. $e->getMessage());
        }
    }
    
    /**
     * Cancel a specific order for the authenticated user as Customer.
     *
     * @param \App\Http\Requests\Order\DestroyOrderRequest $request
     * @param string $id
     * @throws \Throwable
     */
    public function destroy (DestroyOrderRequest $request, string $id) {
        // Alur penghapusan / cancel order
        // 1. Pengguna melakukan klik pada tombol cancel (route yang mengarah ke controller destroy dengan method delete)
        // 2. Lalu id yang terkait dengan order yang dimiliki pengguna akan dicari
        // 3. jika ada, maka order dengan id tersebut akan dihapus
    }
}
