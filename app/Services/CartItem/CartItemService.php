<?php

namespace App\Services\CartItem;

use App\Http\Requests\Cart\StoreCartItemRequest;
use App\Http\Requests\Cart\UpdateCartItemRequest;
use App\Models\CartItem;
use LaravelEasyRepository\BaseService;

interface CartItemService extends BaseService {
    public function getAllCartItems(): array;
    public function createCartItem(StoreCartItemRequest $data): CartItem;
    public function updateCartItem(UpdateCartItemRequest $data, CartItem $cartItem): CartItem;
    public function deleteCartItem(CartItem $cartItem): ?bool;
    public function clearCartItem(): int;
}
