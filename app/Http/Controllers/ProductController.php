<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display the specified resource.
     * Get all Products
     */
    public function index()
    {
        $products = Product::filter()->get();
        $categories = Category::filter()->get();

        return Inertia::render('shop/ProductList', [
            'PRODUCTS' => [
                'data' => $products,
                'total' => $products->count()
            ],
            'CATEGORIES' => $categories
        ]);
    }

    /**
     * Display the specified resource.
     * Get Product by Slug
     */
    public function show(string $slug)
    {
        $product = Product::filter()->slug($slug)->firstOrFail();
        $products = Product::filter()->get();

        return Inertia::render('shop/ProductDetail', [
            'PRODUCTS' => $products,
            'PRODUCT' => $product
        ]);
    }

    /**
     * Display the specified resource.
     * Get Product by Category
     */
    public function showByCategory(string $slug)
    {
        $category = Category::filter()->slug($slug)->firstOrFail();
        $products = $category->products()->latest()->get();
        $categories = Category::filter()->get();

        return Inertia::render('shop/ProductList', [
            'CATEGORY' => $category,
            'PRODUCTS' => [
                'data' => $products,
                'total' => Product::filter()->count()
            ],
            'CATEGORIES' => $categories,
        ]);
    }
}
