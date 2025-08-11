<?php

use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

describe('Visit The Product Detail Page Test', function () {
    test('guest can visit product detail page', function () {
        $category = Category::factory()->create();
        $product = Product::factory()->create(['category_id' => $category->id]);
    
        $response = $this->get(route('products.show', $product->slug));
        $response->assertOk();
    
        $this->assertDatabaseHas('products', [
            'id' => $product->id,
            'category_id' => $product->category->id,
        ]);
    });
    
    test('authenticated user can visit product detail page', function () {
        $user = User::factory()->create();
        $category = Category::factory()->create();
        $product = Product::factory()->create(['category_id' => $category->id]);
    
        $response = $this->actingAs($user)->get(route('products.show', $product->slug));
        $response->assertOk();
    
        $this->assertDatabaseHas('products', [
            'id' => $product->id,
            'category_id' => $product->category->id,
        ]);
    });
});