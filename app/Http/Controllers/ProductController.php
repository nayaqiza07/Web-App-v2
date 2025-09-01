<?php

namespace App\Http\Controllers;

use App\Http\Resources\Category\CategoryDetailResource;
use App\Http\Resources\Category\CategoryListResource;
use App\Http\Resources\Product\ProductDetailResource;
use App\Http\Resources\Product\ProductListResource;
use App\Http\Resources\Product\ProductRelatedResource;
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
            // 'PRODUCTS' => Inertia::defer(fn () => ProductListResource::collection($products)),
            'products' => ProductListResource::collection($products),
            'categories' => CategoryListResource::collection($categories)->resolve()
        ]);
    }

    public function show(string $slug): Response
    {
        $product = $this->productService->getProductBySlug($slug);
        $relatedProducts = $this->productService->getRelatedProducts($slug);
        
        return Inertia::render('shop/ProductDetail', [
            'product' => new ProductDetailResource($product)->resolve(),
            'relatedProducts' => ProductRelatedResource::collection($relatedProducts)->resolve()
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
            'category' => new CategoryDetailResource($category)->resolve(),
            'products' => ProductListResource::collection($products),
            'categories' => CategoryListResource::collection($categories)->resolve()
        ]);
    }
}
