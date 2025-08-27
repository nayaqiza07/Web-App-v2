<?php

namespace App\Services\Blog;

use App\Models\Blog;
use App\Repositories\Blog\BlogRepository;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
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
      $blogs = $this->mainRepository->getPaginatedBlogs($page, $perPage);
      return $blogs->through(fn ($blog) => [
        'id'           => $blog->id,
        'title'        => $blog->title,
        'slug'         => $blog->slug,
        'thumbnail'    => $blog->thumbnail,
        'published_at' => $blog->published_at,
      ]);
    }

    public function getBlogBySlug(string $slug): array
    {
      $blog = $this->mainRepository->getBlogBySlug($slug);
      return [
        'id'           => $blog->id,
        'title'        => $blog->title,
        'body'        => $blog->body,
        'thumbnail'    => $blog->thumbnail,
      ];
    }

    public function getRelatedBlogs(): LengthAwarePaginator
    {
      $relatedBlogs = $this->mainRepository->getRelatedBlogs();
      return $relatedBlogs->through(fn ($blog) => [
        'id'           => $blog->id,
        'title'        => $blog->title,
        'slug'         => $blog->slug,
        'thumbnail'    => $blog->thumbnail,
      ]);
    }
}
