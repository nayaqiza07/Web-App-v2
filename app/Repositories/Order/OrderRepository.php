<?php

namespace App\Repositories\Order;

use App\Models\Order;
use Illuminate\Database\Eloquent\Collection;
use LaravelEasyRepository\Repository;

interface OrderRepository extends Repository{
    public function getAllData(): Collection;
    public function createData(Collection $cartItems, array $orderData): Order;
    public function deleteData(Order $order): ?bool;
}
