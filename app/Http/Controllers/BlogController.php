<?php

namespace App\Http\Controllers;

use App\Http\Resources\Blog\BlogDetailResource;
use App\Http\Resources\Blog\BlogListResource;
use App\Http\Resources\Blog\BlogRelatedResource;
use App\Services\Blog\BlogService;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    protected BlogService $blogService;

    public function __construct(BlogService $blogService)
    {
        $this->blogService = $blogService;
    }

    public function index(): Response
    {
        $page = request('page', 1);
        $perPage = 3;
        $blogs = $this->blogService->getPaginatedBlogs($page, $perPage);
        return Inertia::render('blog/BlogList', [
            // 'BLOGS' => Inertia::defer(fn () => BlogListResource::collection($blogs)),
            'BLOGS' => BlogListResource::collection($blogs),
        ]);
    }

    public function show(string $slug): Response
    {
        $blog = $this->blogService->getBlogBySlug($slug);
        $relatedBlogs = $this->blogService->getRelatedBlogs();
        return Inertia::render('blog/BlogDetail', [
            'BLOG' => new BlogDetailResource($blog)->resolve(),
            'RELATED_BLOGS' => BlogRelatedResource::collection($relatedBlogs)->resolve(),
        ]);
    }
}
