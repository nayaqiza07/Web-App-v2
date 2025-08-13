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
        // $sort = request('sort', 'latest');
        $page = request('page', 1);
        $perPage = 3;
        $cacheKey = "products.page:{$page}";
        // $cacheKey = "products.page:{$page}.sort:{$sort}";
        
        $products = Cache::remember($cacheKey, 3600, function () use ($perPage) {
            return Product::filter()->latest()->paginate($perPage);
        });

        $categories = Cache::remember('categories.list', 3600, function () {
            return Category::filter()->get();
        });

        return Inertia::render('shop/ProductList', [
            'PRODUCTS' => Inertia::defer(fn () => $products),
            'CATEGORIES' => $categories,
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
        $product = Cache::remember("products:{$slug}", 3600, function () use ($slug) {
            return Product::filter()->slug($slug)->firstOrFail();
        });

        $relatedProductsKey = "products.related:{$slug}";
        $relatedProducts = Cache::remember($relatedProductsKey, 3600, function () use ($product) {
            return Product::filter()->related($product)->get();
        });

        return Inertia::render('shop/ProductDetail', [
            'PRODUCTS' => [
                'data'  => $relatedProducts,
                'total' => Product::filter()->count(),
            ],
            'PRODUCT' => Inertia::defer(fn () => $product),
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
        $page = request('page', 1);
        $perPage = 1;
        $cacheProductsByCategoryKey = "products.category:{$slug}.page:{$page}";

        $category = Cache::remember("categories:{$slug}", 3600, function () use ($slug) {
            return Category::filter()->slug($slug)->firstOrFail();
        });

        $products = Cache::remember($cacheProductsByCategoryKey, 3600, function () use ($category, $perPage) {
            return $category->products()->latest()->paginate($perPage);
        });

        $categories = Cache::remember('categories.list', 3600, function () {
            return Category::filter()->get();
        });

        return Inertia::render('shop/ProductList', [
            'CATEGORY' => $category,
            'PRODUCTS' => Inertia::defer(fn () => $products),
            'CATEGORIES' => $categories,
        ]);
    }
}
