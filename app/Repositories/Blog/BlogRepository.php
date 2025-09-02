<?php

namespace App\Repositories\Blog;

use App\Data\PaginationParams;
use App\Models\Blog;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use LaravelEasyRepository\Repository;

interface BlogRepository extends Repository{
    public function getPaginatedBlogs(PaginationParams $pagination): LengthAwarePaginator;
    public function getBlogBySlug(string $slug): Blog;
    public function getRelatedBlogs(): Collection;
    public function getLatestBlogs(): Collection;
}
