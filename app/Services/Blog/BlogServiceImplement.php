<?php

namespace App\Services\Blog;

use App\Models\Blog;
use App\Repositories\Blog\BlogRepository;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use LaravelEasyRepository\Service;

class BlogServiceImplement extends Service implements BlogService{

    /**
     * set title message api for CRUD
     * @param string $title
     */
     protected string $title = "";
     /**
     * uncomment this to override the default message
     * protected string $create_message = "";
     * protected string $update_message = "";
     * protected string $delete_message = "";
     */

     /**
     * don't change $this->mainRepository variable name
     * because used in extends service class
     */
     protected BlogRepository $mainRepository;

    public function __construct(BlogRepository $mainRepository)
    {
      $this->mainRepository = $mainRepository;
    }

    public function getPaginatedBlogs(int $page, int $perPage): LengthAwarePaginator
    {
      return $this->mainRepository->getPaginatedBlogs($page, $perPage);
    }

    public function getBlogBySlug(string $slug): Blog
    {
      return $this->mainRepository->getBlogBySlug($slug);
    }

    public function getRelatedBlogs(): Collection
    {
      return $this->mainRepository->getRelatedBlogs();
    }
}
