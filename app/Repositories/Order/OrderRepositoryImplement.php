<?php

namespace App\Repositories\Order;

use App\Models\CartItem;
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

    public function getAllDataOrder(): Collection
    {
        $order = $this->model->filter()->get();
        return $order;
    }

    public function createDataOrder(array $orderData, array $orderItems): Order
    {
        // dd($orderData);
        return DB::transaction(function () use ($orderData, $orderItems) {
            $order = Order::create($orderData);

            foreach ($orderItems as $item){
                $order->orderItems()->create($item);
            }

            return $order;
        });
    }

    public function deleteDataOrder(Order $order): ?bool
    {
        return $order->delete();
    }

    public function deleteCartItemsByUserId(int $userId): ?bool
    {
        return CartItem::where('user_id', $userId)->delete();
    }
}
