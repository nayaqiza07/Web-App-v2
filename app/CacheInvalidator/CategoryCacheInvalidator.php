<?php

namespace App\CacheInvalidator;

use App\Data\PaginationParams;
use App\Models\Category;
use App\Models\Product;
use App\Services\Product\ProductService;
use Illuminate\Support\Facades\Cache;

class CategoryCacheInvalidator
{
    protected ProductService $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    public function invalidate(Category $category): void
    {
        $pagination = PaginationParams::fromDefaults();
        $totalProducts = Product::count();
        $maxPage = (int) ceil($totalProducts / $pagination->perPage);

        for ($page = 1; $page <= $maxPage; $page++){
            Cache::forget("products.category:{$category->slug}.page:{$page}");
        }
        Cache::forget('products.related');
    }
}
