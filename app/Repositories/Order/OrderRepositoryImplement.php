<?php

namespace App\Repositories\Order;

use LaravelEasyRepository\Implementations\Eloquent;
use App\Models\Order;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class OrderRepositoryImplement extends Eloquent implements OrderRepository {

    /**
    * Model class to be used in this repository for the common methods inside Eloquent
    * Don't remove or change $this->model variable name
    * @property Model|mixed $model;
    */
    protected Order $model;

    public function __construct(Order $model)
    {
        $this->model = $model;
    }

    public function getAllData(): Collection
    {
        $order = $this->model->filter()->get();
        return $order;
    }

    public function createData(Collection $cartItems, array $orderData): Order
    {
        // dd($orderData);
        return DB::transaction(function () use ($cartItems, $orderData) {
            $order = Order::create($orderData);

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

            Auth::user()->$cartItems()->delete();

            return $order;
        });
    }

    public function deleteData(Order $order): ?bool
    {
        return $order->delete();
    }
}
