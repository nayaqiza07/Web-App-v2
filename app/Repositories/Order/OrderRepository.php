<?php

namespace App\Repositories\Order;

use App\Models\Order;
use Illuminate\Database\Eloquent\Collection;
use LaravelEasyRepository\Repository;

interface OrderRepository extends Repository{
    public function getAllDataOrder(): Collection;
    public function createDataOrder(array $orderData, array $orderItems): Order;
    public function deleteDataOrder(Order $order): ?bool;
    public function deleteCartItemsByUserId(int $userId): ?bool;
}
