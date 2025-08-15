<?php

namespace App\Repositories\CartItem;

use App\Http\Requests\Cart\StoreCartItemRequest;
use App\Http\Requests\Cart\UpdateCartItemRequest;
use App\Models\CartItem;
use LaravelEasyRepository\Repository;

interface CartItemRepository extends Repository{
    public function getCartItem(): array;
    public function createCartItem(StoreCartItemRequest $data): CartItem;
    public function updateCartItem(UpdateCartItemRequest $data, CartItem $cartItem): CartItem;
    public function deleteCartItem(CartItem $cartItem): ?bool;
    public function clearCartItem(): int;
}
