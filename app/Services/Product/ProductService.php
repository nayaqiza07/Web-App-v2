<?php

namespace App\Services\Product;

use App\Models\Product;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use LaravelEasyRepository\BaseService;

interface ProductService extends BaseService{
    public function getPaginatedProducts(int $page, int $perPage): LengthAwarePaginator;
    public function getProductBySlug(string $slug): Product;
    public function getProductByCategory(string $slug, int $page, int $perPage): LengthAwarePaginator;
    public function getRelatedProducts(string $slug): Collection;
    public function getFeaturedProducts(): Collection;
}
