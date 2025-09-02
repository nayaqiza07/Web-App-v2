<?php

namespace App\Services\Blog;

use App\Data\PaginationParams;
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


    public function getPaginatedBlogs(PaginationParams $pagination): LengthAwarePaginator
    {
      return $this->mainRepository->getPaginatedBlogs($pagination);
    }

    public function getBlogBySlug(string $slug): Blog
    {
      return $this->mainRepository->getBlogBySlug($slug);
    }

    public function getRelatedBlogs(): Collection
    {
      return $this->mainRepository->getRelatedBlogs();
    }

    public function getLatestBlogs(): Collection
    {
      return $this->mainRepository->getLatestBlogs();
    }
}
