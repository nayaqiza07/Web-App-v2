<?php

namespace App\Repositories\Category;

use App\Models\Category;
use Illuminate\Database\Eloquent\Collection;
use LaravelEasyRepository\Repository;

interface CategoryRepository extends Repository {
    public function getAllData(): Collection;
    public function getDataBySlug(string $slug): Category;
}
