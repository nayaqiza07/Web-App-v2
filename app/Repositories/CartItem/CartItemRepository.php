<?php

namespace App\Repositories\CartItem;

use App\Http\Requests\Cart\StoreCartItemRequest;
use App\Http\Requests\Cart\UpdateCartItemRequest;
use App\Models\CartItem;
use LaravelEasyRepository\Repository;

interface CartItemRepository extends Repository{
    public function getAllData(): array;
    public function createData(StoreCartItemRequest $data): CartItem;
    public function updateData(UpdateCartItemRequest $data, CartItem $cartItem): CartItem;
    public function deleteData(CartItem $cartItem): ?bool;
    public function clearData(): int;
}
