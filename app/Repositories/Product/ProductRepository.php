<?php

namespace App\Repositories\Product;

use App\Models\Product;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use LaravelEasyRepository\Repository;

interface ProductRepository extends Repository{
    public function getPaginatedProducts(int $page, int $perPage): LengthAwarePaginator;
    public function getProductBySlug(string $slug): Product;
    public function getProductByCategory(string $slug, int $page, int $perPage): LengthAwarePaginator;
    public function getRelatedProducts(string $slug): Collection;
}
