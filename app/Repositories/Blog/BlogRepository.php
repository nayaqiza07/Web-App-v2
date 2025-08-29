<?php

namespace App\Repositories\Blog;

use App\Models\Blog;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use LaravelEasyRepository\Repository;

interface BlogRepository extends Repository{
    public function getPaginatedBlogs(int $page, int $perPage): LengthAwarePaginator;
    public function getBlogBySlug(string $slug): Blog;
    public function getRelatedBlogs(): Collection;
}
