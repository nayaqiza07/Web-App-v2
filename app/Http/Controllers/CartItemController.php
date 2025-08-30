<?php

namespace App\Http\Controllers;

use App\Http\Requests\Cart\DestroyCartItemRequest;
use App\Http\Requests\Cart\StoreCartItemRequest;
use App\Http\Requests\Cart\UpdateCartItemRequest;
use App\Models\Address;
use App\Models\CartItem;
use App\Services\CartItem\CartItemService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class CartItemController extends Controller
{
    protected CartItemService $cartItemService;

    public function __construct(CartItemService $cartItemService)
    {
        $this->cartItemService = $cartItemService;
    }

    public function index()
    {
        return Inertia::render('cart/Cart');
    }

    public function store(StoreCartItemRequest $request)
    {
        DB::beginTransaction();
        try {
            $this->cartItemService->createCartItem($request);
            DB::commit();
            return back()->with('success', 'Product successfully added to cart!');
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error("Cart item failed to create", [
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
            ]);
            return back()->with('error', 'Product failed added to cart!');
        }
    }

    public function update(UpdateCartItemRequest $request, CartItem $cartItem)
    {
        try {
            $this->cartItemService->updateCartItem($request, $cartItem);
            return back()->with('info', 'Cart item updated successfully');
        } catch (\Exception $e) {
            Log::error("Cart item failed to update", [
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
            ]);

            return back()->with('error', 'Cart item updated failed');
        }
    }

    public function destroy(DestroyCartItemRequest $request, CartItem $cartItem): RedirectResponse
    {
        try {
            $this->cartItemService->deleteCartItem($cartItem);
            return back()->with('success', 'Product successfully removed from cart.');
        } catch (\Exception $e) {
            Log::error("Cart item failed to delete", [
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
            ]);

            return back()->with('error', 'Failed to remove product from cart.');
        }
    }

    public function clear(): RedirectResponse
    {
        try {
            $deleted = $this->cartItemService->clearCartItem();
            if ($deleted === 0) {
                return back()->with('error', 'You must be logged in to clear your cart.');
            }
            return back()->with('success', 'All products successfully removed from cart.');
        } catch (\Exception $e) {
            Log::error("Cart item failed to clear", [
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
            ]);

            return back()->with('error', 'Failed to clear cart.');
        }
    }
}
