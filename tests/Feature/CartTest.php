<?php

use App\Models\CartItem;
use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('authenticated user can access cart page', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get('/cart');

    $response->assertOk();
});

test('authenticated user can add same product to cart and it increments quantity', function () {
    $user = User::factory()->create();
    $product = Product::factory()->create();
   
    CartItem::create([
        'user_id' => $user->id,
        'product_id' => $product->id,
        'quantity' => 1,
    ]);

    $response = $this
        ->actingAs($user)
        ->post('/cart', [
            'user_id' => $user->id,
            'product_id' => $product->id,
            'quantity' => 1,
        ]);
    
    $response
        ->assertSessionHasNoErrors();

    $this->assertEquals(1, CartItem::where('user_id', $user->id)
        ->where('product_id', $product->id)
        ->count());

    $this->assertDatabaseHas('cart_items', [
        'user_id' => $user->id,
        'product_id' => $product->id,
        'quantity' => 2,
    ]);

    expect(CartItem::where('user_id', $user->id)
        ->where('product_id', $product->id)
        ->first())
        ->quantity->toBe(2);
});

test('authenticated user can add new product to cart if it does not exists', function () {
    $user = User::factory()->create();
    $product = Product::factory()->create();

    $this->assertDatabaseMissing('cart_items', [
        'user_id' => $user->id,
        'product_id' => $product->id,
    ]);

    $this->actingAs($user)->post('/cart', [
        'user_id' => $user->id,
        'product_id' => $product->id,
        'quantity' => 1,
    ])->assertSessionHasNoErrors();

    $this->assertDatabaseHas('cart_items', [
        'user_id' => $user->id,
        'product_id' => $product->id,
        'quantity' => 1,
    ]);
});

test('authenticated user can update product in cart', function () {
    $user = User::factory()->create();
    $product = Product::factory()->create();
    $cartItem = CartItem::create([
        'user_id' => $user->id,
        'product_id' => $product->id,
        'quantity' => 1,
    ]);

    $response = $this
        ->actingAs($user)
        ->put("/cart/{$cartItem->id}", [
            'quantity' => $cartItem->quantity + 1
        ]);

    $response
        ->assertSessionHasNoErrors();

    $updatedCartItem = $cartItem->fresh();

    expect($updatedCartItem->quantity)->toBe(2);
});

test('authenticated user can delete product in cart', function () {
    $user = User::factory()->create();
    $product = Product::factory()->create();
    $cartItem = CartItem::create([
        'user_id' => $user->id,
        'product_id' => $product->id,
        'quantity' => 1,
    ]);

    $response = $this
        ->actingAs($user)
        ->delete("/cart/{$cartItem->id}");

    $response
        ->assertSessionHasNoErrors();

    $this->assertDatabaseMissing('cart_items', [
        'id' => $cartItem->id,
        'user_id' => $user->id,
        'product_id' => $product->id,
    ]);
});

test('authenticated user cannot update/delete cart item of another user', function () {
    $userA = User::factory()->create();
    $userB = User::factory()->create();
    $product = Product::factory()->create();

    $cartItem = CartItem::create([
        'user_id' => $userB->id,
        'product_id' => $product->id,
        'quantity' => 1,
    ]);

    $this->actingAs($userA)->put("/cart/{$cartItem->id}")
        ->assertForbidden();

    $this->actingAs($userA)->delete("/cart/{$cartItem->id}")
        ->assertForbidden();
});

test('authenticated user can clear cart', function () {
    $user = User::factory()->create();
    $product = Product::factory()->create();
    CartItem::create([
        'user_id' => $user->id,
        'product_id' => $product->id,
        'quantity' => 1,
    ]);

    $response = $this
        ->actingAs($user)
        ->delete("/cart");

    $response
        ->assertSessionHasNoErrors();
    
    $this->assertDatabaseMissing('cart_items', [
        'user_id' => $user->id
    ]);
});