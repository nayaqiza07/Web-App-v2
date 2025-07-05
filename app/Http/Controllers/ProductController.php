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
        $products = Product::all();
        $categories = Category::withCount('products')->orderBy('name', 'asc')->get();

        return Inertia::render('shop/ProductList', [
            'PRODUCTS' => $products,
            'CATEGORIES' => $categories
        ]);
    }

    /**
     * Display the specified resource.
     * Get Product by Slug
     */
    public function show(string $slug)
    {
        $product = Product::where('slug', $slug)->firstOrFail();
        $products = Product::all();

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
        $category = Category::where('slug', $slug)->firstOrFail();
        $products = $category->products()->latest()->get();
        $categories = Category::withCount('products')->orderBy('name', 'asc')->get();

        return Inertia::render('shop/ProductList', [
            'CATEGORY' => $category,
            'PRODUCTS' => $products,
            'CATEGORIES' => $categories,
        ]);
    }
}
