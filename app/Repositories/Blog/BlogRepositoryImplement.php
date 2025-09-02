<?php

namespace App\Repositories\Blog;

use App\Data\PaginationParams;
use LaravelEasyRepository\Implementations\Eloquent;
use App\Models\Blog;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
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

    public function getPaginatedBlogs(PaginationParams $pagination): LengthAwarePaginator
    {
        return Cache::remember("blogs.page:{$pagination->page}", 3600, function () use ($pagination) {
            return $this->model->filter()->paginate($pagination->perPage, ['*'], 'page', $pagination->page);
        });
    }

    public function getBlogBySlug(string $slug): Blog
    {
        return Cache::remember("blogs:{$slug}", 3600, function () use ($slug) {
            return $this->model->filter()->slug($slug)->firstOrFail();
        });
    }

    public function getRelatedBlogs(): Collection
    {
        return Cache::remember('blogs.related', 3600, function () {
            return $this->model->filter()->take(5)->get();
        });
    }

    public function getLatestBlogs(): Collection
    {
        return Cache::remember('blogs.latest', 3600, function () {
            return $this->model->filter()->latest()->get();
        });
    }

    
}
