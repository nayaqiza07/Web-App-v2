<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Services\Category\CategoryService;
use App\Services\Product\ProductService;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    protected ProductService $productService;
    protected CategoryService $categoryService;

    public function __construct(ProductService $productService, CategoryService $categoryService)
    {
        $this->productService = $productService;
        $this->categoryService = $categoryService;
    }

    public function index(): Response
    {
        // $sort = request('sort', 'latest');
        $page = request('page', 1);
        $perPage = 3;
        // $cacheKey = "products.page:{$page}.sort:{$sort}";

        $products = $this->productService->getPaginatedProducts($page, $perPage);
        $categories = $this->categoryService->getAllCategory();
        return Inertia::render('shop/ProductList', [
            'PRODUCTS' => Inertia::defer(fn () => $products),
            'CATEGORIES' => $categories,
        ]);
    }

    public function show(string $slug): Response
    {
        $product = $this->productService->getProductBySlug($slug);
        $relatedProducts = $this->productService->getRelatedProducts($slug);
        return Inertia::render('shop/ProductDetail', [
            'PRODUCT' => Inertia::defer(fn () => $product),
            'PRODUCTS' => [
                'data'  => $relatedProducts,
                'total' => Product::filter()->count(),
            ],
        ]);
    }

    public function showByCategory(string $slug): Response
    {
        $page = request('page', 1);
        $perPage = 1;

        $category = $this->categoryService->getCategoryBySlug($slug);
        $products = $this->productService->getProductByCategory($slug, $page, $perPage);
        $categories = $this->categoryService->getAllCategory();

        return Inertia::render('shop/ProductList', [
            'CATEGORY' => $category,
            'PRODUCTS' => Inertia::defer(fn () => $products),
            'CATEGORIES' => $categories,
        ]);
    }
}
