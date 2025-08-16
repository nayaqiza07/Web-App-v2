<?php

namespace App\Repositories\Product;

use App\Models\Category;
use LaravelEasyRepository\Implementations\Eloquent;
use App\Models\Product;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Cache;

class ProductRepositoryImplement extends Eloquent implements ProductRepository{

    /**
    * Model class to be used in this repository for the common methods inside Eloquent
    * Don't remove or change $this->model variable name
    * @property Model|mixed $model;
    */
    protected Product $model;

    public function __construct(Product $model)
    {
        $this->model = $model;
    }

    public function getPaginatedProducts(int $page, int $perPage): LengthAwarePaginator
    {
        return Cache::remember("products.page:{$page}", 3600, function () use ($perPage) {
            return Product::filter()->latest()->paginate($perPage);
        });
    }

    public function getProductBySlug(string $slug): Product
    {
        return Cache::remember("products:{$slug}", 3600, function () use ($slug) {
            return Product::filter()->slug($slug)->firstOrFail();
        });
    }

    public function getProductByCategory(string $slug, int $page, int $perPage): LengthAwarePaginator
    {
        return Cache::remember("products.category:{$slug}.page{$page}", 3600, function () use ($slug, $perPage) {
            $category = Cache::remember("categories:{$slug}", 3600, function () use ($slug) {
                return Category::filter()->slug($slug)->firstOrFail();
            });
            return $category->products()->latest()->paginate($perPage);
        });
    }

    public function getRelatedProducts(string $slug): Collection
    {
        return Cache::remember("products.related:{$slug}", 3600, function () use ($slug) {
            $product = $this->getProductBySlug($slug);

            return Product::filter()->related($product)->get();
        });
    }
}
