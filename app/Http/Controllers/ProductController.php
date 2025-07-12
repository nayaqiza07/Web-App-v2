<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    /**
     * Display the list of visible products and categories for the shop
     * 
     * @return \Inertia\Response
     */
    public function index(): Response
    {
        $products = Product::filter()->latest()->paginate(16);
        $categories = Category::filter()->get();

        return Inertia::render('shop/ProductList', [
            'PRODUCTS' => $products,
            'CATEGORIES' => $categories
        ]);
    }

    /**
     * Display the specified product by slug
     * 
     * @param string $slug
     * @return \Inertia\Response
     */
    public function show(string $slug): Response
    {
        $product = Product::filter()->slug($slug)->firstOrFail();
        $products = Product::filter()->get();

        return Inertia::render('shop/ProductDetail', [
            'PRODUCTS' => [
                'data' => $products,
                'total' => Product::filter()->count()
            ],
            'PRODUCT' => $product
        ]);
    }

    /**
     * Display the specified product by category
     * 
     * @param string $slug
     * @return \Inertia\Response
     */
    public function showByCategory(string $slug): Response
    {
        $category = Category::filter()->slug($slug)->firstOrFail();
        $products = $category->products()->latest()->paginate(16);
        $categories = Category::filter()->get();

        return Inertia::render('shop/ProductList', [
            'CATEGORY' => $category,
            'PRODUCTS' => $products,
            // 'PRODUCTS' => [
            //     'data' => $products,
            //     'total' => Product::filter()->count()
            // ],
            'CATEGORIES' => $categories,
        ]);
    }
}
