<?php

namespace App\Observers;

use App\Models\Category;
use Illuminate\Support\Facades\Cache;

class CategoryObserver
{
    /**
     * Handle the Category "created" event.
     */
    public function created(Category $category): void
    {
        Cache::forget('categories.list');
        Cache::forget("categories:{$category->slug}");
        
        $maxPage = 20;
        for ($page = 1; $page <= $maxPage; $page++){
            Cache::forget("products.category:{$category->slug}.page:{$page}");
        }
        Cache::forget('products.related');
    }

    /**
     * Handle the Category "updated" event.
     */
    public function updated(Category $category): void
    {
        Cache::forget('categories.list');
        Cache::forget("categories:{$category->slug}");

        $maxPage = 20;
        for ($page = 1; $page <= $maxPage; $page++){
            Cache::forget("products.category:{$category->slug}.page:{$page}");
        }
        Cache::forget('products.related');
    }

    /**
     * Handle the Category "deleted" event.
     */
    public function deleted(Category $category): void
    {
        Cache::forget('categories.list');
        Cache::forget("categories:{$category->slug}");
        
        $maxPage = 20;
        for ($page = 1; $page <= $maxPage; $page++){
            Cache::forget("products.category:{$category->slug}.page:{$page}");
        }
        Cache::forget('products.related');
    }

    /**
     * Handle the Category "restored" event.
     */
    public function restored(Category $category): void
    {
        //
    }

    /**
     * Handle the Category "force deleted" event.
     */
    public function forceDeleted(Category $category): void
    {
        //
    }
}
