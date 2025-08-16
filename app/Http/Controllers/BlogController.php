<?php

namespace App\Http\Controllers;

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
        // $cacheKey = "blogs.page:{$page}";
        $blogs = $this->blogService->getPaginatedBlogs($page, $perPage);
        return Inertia::render('blog/BlogList', [
            'BLOGS' => Inertia::defer(fn () => $blogs),
        ]);
    }

    public function show(string $slug): Response
    {
        $blog = $this->blogService->getBlogBySlug($slug);
        $blogs = $this->blogService->getRelatedBlogs();
        return Inertia::render('blog/BlogDetail', [
            'BLOG' => Inertia::defer(fn () => $blog),
            'BLOGS' => Inertia::defer(fn () => $blogs),
        ]);
    }
}
