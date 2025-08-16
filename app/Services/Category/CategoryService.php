<?php

namespace App\Services\Category;

use App\Models\Category;
use Illuminate\Database\Eloquent\Collection;
use LaravelEasyRepository\BaseService;

interface CategoryService extends BaseService{
    public function getAllCategory(): Collection;
    public function getCategoryBySlug(string $slug): Category;
}
