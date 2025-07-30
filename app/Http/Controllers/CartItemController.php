<?php

namespace App\Http\Controllers;

use App\Http\Requests\Cart\DestroyCartItemRequest;
use App\Http\Requests\Cart\StoreCartItemRequest;
use App\Http\Requests\Cart\UpdateCartItemRequest;
use Illuminate\Http\Request;
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
     * Store a newly created resource in storage.
     * 
     * @param \App\Http\Requests\Cart\StoreCartItemRequest $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Throwable
     */
    public function store(StoreCartItemRequest $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     * 
     * @param \App\Http\Requests\Cart\UpdateCartItemRequest $request
     * @param string $id
     * @throws \Throwable
     */
    public function update(UpdateCartItemRequest $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     * 
     * @param \App\Http\Requests\Cart\DestroyCartItemRequest $request
     * @param string $id
     * @throws \Throwable
     */
    public function destroy(DestroyCartItemRequest $request, string $id)
    {
        //
    }
}
