<?php

namespace App\Repositories\CartItem;

use App\Http\Requests\Cart\StoreCartItemRequest;
use App\Http\Requests\Cart\UpdateCartItemRequest;
use LaravelEasyRepository\Implementations\Eloquent;
use App\Models\CartItem;
use Illuminate\Support\Facades\Auth;

class CartItemRepositoryImplement extends Eloquent implements CartItemRepository{
    protected CartItem $model;

    public function __construct(CartItem $model)
    {
        $this->model = $model;
    }

    public function getCartItem(): array
    {
        if (!Auth::check()) {
            return [
                'items' => collect(),
                'total_items' => 0
            ];
        }

        $cartItems = $this->model
                    ->where('user_id', Auth::id())
                    ->with('product:id,name,slug,category_id,thumbnail,price,old_price')
                    ->get();

        return [
            'items' => $cartItems,
            'total_items' => $cartItems->count()
        ];
    }

    public function createCartItem(StoreCartItemRequest $data): CartItem
    {
        $userId = Auth::id();
        $productId = $data->input('product_id');
        $quantity = $data->input('quantity');

        $cartItem = CartItem::firstOrNew([
            'user_id' => $userId,
            'product_id' => $productId,
        ]);

        if ($cartItem->exists) {
            $cartItem->quantity += $quantity;
        } else {
            $cartItem->quantity = $quantity;
        }

        $cartItem->save();
        return $cartItem;
    }

    public function updateCartItem(UpdateCartItemRequest $data, CartItem $cartItem): CartItem
    {
        if ($cartItem->user_id !== Auth::id()) {
            abort(403, 'Unauthorized action.');
        }

        $cartItem->quantity = $data->validated('quantity');
        $cartItem->save();
        return $cartItem;
    }

    public function deleteCartItem(CartItem $cartItem): ?bool
    {
        return $cartItem->delete();
    }

    public function clearCartItem(): int
    {
        if (!Auth::check()) {
            return 0;
        }

        return $this->model->where('user_id', Auth::id())->delete();
    }
}
