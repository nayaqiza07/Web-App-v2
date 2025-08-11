<?php

use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

describe('Visit The Product Page Test', function() {
    test('guest can visit product page', function () {
        $this->get(route('products.index'))->assertStatus(200);
    });
    
    test('authenticated user can visit product page', function () {
        $user = User::factory()->create();
        $this->actingAs($user)->get(route('products.index'))->assertStatus(200);
    });
});

// describe('Test Product List', function () {
//     test('product data not found', function () {
//         $response = $this->get(route('products.index'));
//         $response->assertStatus(200);
//         $response->assertSee(__('No Products Found'));
//     });

//     test('product data exists', function () {
//         Product::factory()->create();
//         $response = $this->get(route('products.index'));
//         $response->assertStatus(200);
//         $response->assertDontSee(__('No Products Found'));
//     });
// });