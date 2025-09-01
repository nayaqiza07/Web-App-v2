<?php

namespace App\Http\Controllers;

use App\Http\Resources\Blog\BlogListResource;
use App\Http\Resources\Category\CategoryDetailResource;
use App\Http\Resources\Product\ProductListResource;
use App\Services\Blog\BlogService;
use App\Services\Category\CategoryService;
use App\Services\Product\ProductService;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __construct(
            protected ProductService $productService,
            protected CategoryService $categoryService,
            protected BlogService $blogService
        )
    {
        $this->productService = $productService;
        $this->categoryService = $categoryService;
        $this->blogService = $blogService;
    }

    public function __invoke()
    {
        $featuredProducts = $this->productService->getFeaturedProducts();
        $categories = $this->categoryService->getAllCategory();
        $latestBlogs = $this->blogService->getLatestBlogs();
        
        return Inertia::render('home/Home', [
            'featuredProducts' => ProductListResource::collection($featuredProducts)->resolve(),
            'categories' => CategoryDetailResource::collection($categories)->resolve(),
            'latestBlogs' => BlogListResource::collection($latestBlogs)->resolve()
        ]);
    }
}
