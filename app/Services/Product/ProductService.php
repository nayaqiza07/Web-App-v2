<?php

namespace App\Services\Product;

use App\Data\PaginationParams;
use App\Models\Product;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use LaravelEasyRepository\BaseService;

interface ProductService extends BaseService{
    public function getPaginatedProducts(PaginationParams $pagination): LengthAwarePaginator;
    public function getProductBySlug(string $slug): Product;
    public function getProductByCategory(string $slug, PaginationParams $pagination): LengthAwarePaginator;
    public function getRelatedProducts(string $slug): Collection;
    public function getFeaturedProducts(): Collection;
}
