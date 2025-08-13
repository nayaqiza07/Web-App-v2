<?php

namespace App\Observers;

use App\Models\Blog;
use Illuminate\Support\Facades\Cache;

class BlogObserver
{
    /**
     * Handle the Blog "created" event.
     */
    public function created(Blog $blog): void
    {
        $maxPage = 20;

        for ($page = 1; $page <= $maxPage; $page++){
            Cache::forget("blogs.page:{$page}");
        }

        Cache::forget("blogs.related");
        Cache::forget("blogs:{$blog->slug}");
    }

    /**
     * Handle the Blog "updated" event.
     */
    public function updated(Blog $blog): void
    {
        $maxPage = 20;

        for ($page = 1; $page <= $maxPage; $page++){
            Cache::forget("blogs.page:{$page}");
        }

        Cache::forget("blogs.related");
        Cache::forget("blogs:{$blog->slug}");
    }

    /**
     * Handle the Blog "deleted" event.
     */
    public function deleted(Blog $blog): void
    {
        $maxPage = 20;

        for ($page = 1; $page <= $maxPage; $page++){
            Cache::forget("blogs.page:{$page}");
        }

        Cache::forget("blogs.related");
        Cache::forget("blogs:{$blog->slug}");
    }

    /**
     * Handle the Blog "restored" event.
     */
    public function restored(Blog $blog): void
    {
        //
    }

    /**
     * Handle the Blog "force deleted" event.
     */
    public function forceDeleted(Blog $blog): void
    {
        //
    }
}
