<?php

namespace App\Repositories\Blog;

use LaravelEasyRepository\Implementations\Eloquent;
use App\Models\Blog;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Cache;

class BlogRepositoryImplement extends Eloquent implements BlogRepository{

    /**
    * Model class to be used in this repository for the common methods inside Eloquent
    * Don't remove or change $this->model variable name
    * @property Model|mixed $model;
    */
    protected Blog $model;

    public function __construct(Blog $model)
    {
        $this->model = $model;
    }

    public function getPaginatedBlogs(int $page, int $perPage): LengthAwarePaginator
    {
        return Cache::remember("blogs.page:{$page}", 3600, function () use ($perPage) {
            return Blog::filter()->paginate($perPage);
        });
    }

    public function getBlogBySlug(string $slug): Blog
    {
        return Cache::remember("blogs:{$slug}", 3600, function () use ($slug) {
            return Blog::filter()->slug($slug)->firstOrFail();
        });
    }

    public function getRelatedBlogs(): LengthAwarePaginator
    {
        return Cache::remember('blogs.related', 3600, function () {
            return Blog::filter()->paginate(5);
        });
    }
}
