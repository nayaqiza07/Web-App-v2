<?php

namespace App\Observers;

use App\Models\Product;
use Illuminate\Support\Facades\Cache;

class ProductObserver
{
    /**
     * Handle the Product "created" event.
     */
    public function created(Product $product): void
    {
        $maxPage = 20;

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

    /**
     * Handle the Product "updated" event.
     */
    public function updated(Product $product): void
    {
        $maxPage = 20;

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

    /**
     * Handle the Product "deleted" event.
     */
    public function deleted(Product $product): void
    {
        $maxPage = 20;

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

    /**
     * Handle the Product "restored" event.
     */
    public function restored(Product $product): void
    {
        //
    }

    /**
     * Handle the Product "force deleted" event.
     */
    public function forceDeleted(Product $product): void
    {
        //
    }
}
