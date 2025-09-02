<?php

namespace App\CacheInvalidator;

use App\Data\PaginationParams;
use App\Models\Blog;
use App\Services\Blog\BlogService;
use Illuminate\Support\Facades\Cache;

class BlogCacheInvalidator
{
    protected BlogService $blogService;

    public function __construct(BlogService $blogService)
    {
        $this->blogService = $blogService;
    }

    public function invalidate(Blog $blog): void
    {
        $pagination = PaginationParams::fromDefaults();
        $totalBlogs = Blog::count();
        $maxPage = (int) ceil($totalBlogs / $pagination->perPage);

        for ($page = 1; $page <= $maxPage; $page++){
            Cache::forget("blogs.page:{$page}");
        }

        Cache::forget("blogs.related");
        Cache::forget("blogs:{$blog->slug}");
        Cache::forget("blogs.latest");
    }
}
