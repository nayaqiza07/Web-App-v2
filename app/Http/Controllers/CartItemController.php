<?php

namespace App\Http\Controllers;

use App\Http\Requests\Cart\DestroyCartItemRequest;
use App\Http\Requests\Cart\StoreCartItemRequest;
use App\Http\Requests\Cart\UpdateCartItemRequest;
use App\Models\CartItem;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CartItemController extends Controller
{
    /**
     * Display a listing of the resource.
     * 
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('cart/Cart');
    }

    /**
     * Store a newly cart item
     * 
     * @param \App\Http\Requests\Cart\StoreCartItemRequest $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception $e
     */
    public function store(StoreCartItemRequest $request)
    {
        DB::beginTransaction();

        try {
            $userId = Auth::id();
            $productId = $request->input('product_id');
            $quantity = $request->input('quantity');

            $cartItem = CartItem::firstOrNew([
                'user_id' => $userId,
                'product_id' => $productId,
            ]);

            if ($cartItem->exists) {
                $cartItem->quantity += $quantity;
            } else {
                $cartItem->quantity = $quantity;
            };

            $cartItem->save();

            DB::commit();

            return back()->with('success', 'Product successfully added to cart!');
        } catch (\Exception $e) {
            DB::rollBack();

            return back()->with('error', 'Product failed added to cart! ' . $e->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     * 
     * @param \App\Http\Requests\Cart\UpdateCartItemRequest $request
     * @param \App\Models\CartItem $cartItem
     * @throws \Exception $e
     */
    public function update(UpdateCartItemRequest $request, CartItem $cartItem)
    {
        try {
            if ($cartItem->user_id !== Auth::id()) {
                abort(403, 'Unauthorized action.');
            }
    
            $cartItem->quantity = $request->validated('quantity');
            $cartItem->save();

            return back()->with('info', 'Cart item updated successfully');
        } catch (\Exception $e) {
            return back()->with('error', 'Cart item updated failed');
        }
    }

    /**
     * Remove the specified resource from storage.
     * 
     * @param \App\Http\Requests\Cart\DestroyCartItemRequest $request
     * @param \App\Models\CartItem $cartItem
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(DestroyCartItemRequest $request, CartItem $cartItem): RedirectResponse
    {
        $cartItem->delete();
        
        return back()->with('success', 'Product successfully removed from cart.');
    }

    /**
     * Remove all resource from storage.
     * 
     * @return \Illuminate\Http\RedirectResponse
     */
    public function clear(): RedirectResponse
    {
        if (!Auth::check()) {
            return back()->with('error', 'You must be logged in to delete your cart.');
        }

        CartItem::where('user_id', Auth::id())->delete();

        return back()->with('success', 'All product successfully removed from cart.');
    }
}
