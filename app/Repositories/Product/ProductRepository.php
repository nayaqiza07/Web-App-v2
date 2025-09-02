<?php

namespace App\Repositories\Product;

use App\Data\PaginationParams;
use App\Models\Product;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use LaravelEasyRepository\Repository;

interface ProductRepository extends Repository{
    public function getPaginatedProducts(PaginationParams $pagination): LengthAwarePaginator;
    public function getProductBySlug(string $slug): Product;
    public function getProductByCategory(string $slug, PaginationParams $pagination): LengthAwarePaginator;
    public function getRelatedProducts(string $slug): Collection;
    public function getFeaturedProducts(): Collection;
}
