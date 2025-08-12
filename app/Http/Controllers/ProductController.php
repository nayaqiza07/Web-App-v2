<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Support\Facades\Cache;
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
        // $page = request('page', 1);
        // $filters = request()->except('page'); // semua filter kecuali page
        // $cacheKey = 'products.list.page.' . $page . '.' . md5(json_encode($filters));
        $products = Cache::remember("products.list", 3600, function () {
            return Product::filter()->latest()->paginate(16);
        });

        $categories = Cache::remember('categories.list', 3600, function () {
            return Category::filter()->get();
        });

        return Inertia::render('shop/ProductList', [
            'PRODUCTS' => Inertia::defer(function () use ($products) {
                return $products;
            }),
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
        $product = Cache::remember("products?.slug={$slug}", 3600, function () use ($slug) {
            return Product::filter()->slug($slug)->firstOrFail();
        });

        $products = Cache::remember('products.related', 3600, function () {
            return Product::filter()->get();
        });

        return Inertia::render('shop/ProductDetail', [
            'PRODUCTS' => [
                'data'  => $products,
                'total' => Product::filter()->count()
            ],
            'PRODUCT' => Inertia::defer(fn () => $product)
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
        $category = Cache::remember("categories?.slug={$slug}", 3600, function () use ($slug) {
            return Category::filter()->slug($slug)->firstOrFail();
        });

        $products = Cache::remember("products.category?.slug={$slug}", 3600, function () use ($category) {
            return $category->products()->latest()->paginate(16);
        });

        $categories = Cache::remember('categories.list', 3600, function () {
            return Category::filter()->get();
        });

        return Inertia::render('shop/ProductList', [
            'CATEGORY' => $category,
            'PRODUCTS' => Inertia::defer(function () use ($products) {
                return $products;
            }),
            'CATEGORIES' => $categories,
        ]);
    }
}
