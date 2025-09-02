<?php

namespace App\Repositories\Product;

use App\Data\PaginationParams;
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
    protected Category $category;

    public function __construct(Product $model, Category $category)
    {
        $this->model = $model;
        $this->category = $category;
    }

    public function getPaginatedProducts(PaginationParams $pagination): LengthAwarePaginator
    {
        return Cache::remember("products.page:{$pagination->page}", 3600, function () use ($pagination) {
            return $this->model->filter()->latest()->paginate($pagination->perPage, ['*'], 'page', $pagination->page);
        });
    }

    public function getProductBySlug(string $slug): Product
    {
        return Cache::remember("products:{$slug}", 3600, function () use ($slug) {
            return $this->model->filter()->slug($slug)->firstOrFail();
        });
    }

    public function getProductByCategory(string $slug, PaginationParams $pagination): LengthAwarePaginator
    {
        return Cache::remember("products.category:{$slug}.page{$pagination->page}", 3600, function () use ($slug, $pagination) {
            $category = Cache::remember("categories:{$slug}", 3600, function () use ($slug) {
                return $this->category->filter()->slug($slug)->firstOrFail();
            });
            return $category->products()->latest()->paginate($pagination->perPage, ['*'], 'page', $pagination->page);
        });
    }

    public function getRelatedProducts(string $slug): Collection
    {
        return Cache::remember("products.related:{$slug}", 3600, function () use ($slug) {
            $product = $this->getProductBySlug($slug);

            return $this->model->filter()->related($product)->get();
        });
    }

    public function getFeaturedProducts(): Collection
    {
        return Cache::remember("products.featured", 3600, function () {
            return $this->model->filter()->where('old_price', '>', 'price')->get();
        });
    }
}
