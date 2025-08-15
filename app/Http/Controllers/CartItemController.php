<?php

namespace App\Http\Controllers;

use App\Http\Requests\Cart\DestroyCartItemRequest;
use App\Http\Requests\Cart\StoreCartItemRequest;
use App\Http\Requests\Cart\UpdateCartItemRequest;
use App\Models\CartItem;
use App\Repositories\CartItem\CartItemRepository;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CartItemController extends Controller
{
    protected CartItemRepository $cartItemRepository;

    public function __construct(CartItemRepository $cartItemRepository)
    {
        $this->cartItemRepository = $cartItemRepository;
    }

    public function index()
    {
        return Inertia::render('cart/Cart');
    }

    public function store(StoreCartItemRequest $request)
    {
        DB::beginTransaction();
        try {
            $this->cartItemRepository->createCartItem($request);
            DB::commit();
            return back()->with('success', 'Product successfully added to cart!');
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with('error', 'Product failed added to cart!');
        }
    }

    public function update(UpdateCartItemRequest $request, CartItem $cartItem)
    {
        try {
            $this->cartItemRepository->updateCartItem($request, $cartItem);
            return back()->with('info', 'Cart item updated successfully');
        } catch (\Exception $e) {
            return back()->with('error', 'Cart item updated failed');
        }
    }

    public function destroy(DestroyCartItemRequest $request, CartItem $cartItem): RedirectResponse
    {
        try {
            $this->cartItemRepository->deleteCartItem($cartItem);
            return back()->with('success', 'Product successfully removed from cart.');
        } catch (\Exception $e) {
            return back()->with('error', 'Failed to remove product from cart.');
        }
    }

    public function clear(): RedirectResponse
    {
        try {
            $deleted = $this->cartItemRepository->clearCartItem();
            if ($deleted === 0) {
                return back()->with('error', 'You must be logged in to clear your cart.');
            }
            return back()->with('success', 'All products successfully removed from cart.');
        } catch (\Exception $e) {
            return back()->with('error', 'Failed to clear cart.');
        }
    }
}
