<?php

namespace App\CacheInvalidator;

use App\Data\PaginationParams;
use App\Models\Product;
use App\Services\Product\ProductService;
use Illuminate\Support\Facades\Cache;

class ProductCacheInvalidator
{
    protected ProductService $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    public function invalidate(Product $product): void
    {
        $pagination = PaginationParams::fromDefaults();
        $totalProducts = Product::count();
        $maxPage = (int) ceil($totalProducts / $pagination->perPage);

        for ($page = 1; $page <= $maxPage; $page++){
            Cache::forget("products.page:{$page}");

            if ($product->category) {
                Cache::forget("products.category:{$product->category->slug}.page:{$page}");
            }
        }

        Cache::forget("products:{$product->slug}");
        Cache::forget("products.related:{$product->id}");
        Cache::forget("products.featured");
    }
}
