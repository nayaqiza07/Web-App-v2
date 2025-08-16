<?php

namespace App\Repositories\Category;

use LaravelEasyRepository\Implementations\Eloquent;
use App\Models\Category;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Cache;

class CategoryRepositoryImplement extends Eloquent implements CategoryRepository{

    /**
    * Model class to be used in this repository for the common methods inside Eloquent
    * Don't remove or change $this->model variable name
    * @property Model|mixed $model;
    */
    protected Category $model;

    public function __construct(Category $model)
    {
        $this->model = $model;
    }

    public function getAllData(): Collection
    {
        return Cache::remember('categories.list', 3600, function () {
            return Category::filter()->get();
        });
    }

    public function getDataBySlug(string $slug): Category
    {
        return Cache::remember("categories:{$slug}", 3600, function () use ($slug) {
            return Category::filter()->slug($slug)->firstOrFail();
        });
    }
}
