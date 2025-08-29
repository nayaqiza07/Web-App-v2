<?php

namespace App\Services\Blog;

use App\Models\Blog;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use LaravelEasyRepository\BaseService;

interface BlogService extends BaseService{
    public function getPaginatedBlogs(int $page, int $perPage): LengthAwarePaginator;
    public function getBlogBySlug(string $slug): Blog;
    public function getRelatedBlogs(): Collection;
}
