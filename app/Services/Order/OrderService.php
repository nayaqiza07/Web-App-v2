<?php

namespace App\Services\Order;

use App\Http\Requests\Order\StoreOrderRequest;
use App\Models\Order;
use Illuminate\Database\Eloquent\Collection;
use LaravelEasyRepository\BaseService;

interface OrderService extends BaseService{
    public function getAllOrders(): Collection;
    public function createOrder(StoreOrderRequest $data): Order;
    public function deleteOrder(Order $order): ?bool;
}
