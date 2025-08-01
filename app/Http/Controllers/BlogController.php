<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    /**
     * Display the list of visible blog posts
     * 
     * @return \Inertia\Response
     */
    public function index(): Response
    {
        $cacheKey = 'blogs.list';
        $blogs = Cache::remember($cacheKey, 3600, function () {
            return Blog::filter()->paginate(15);
        });

        return Inertia::render('blog/BlogList', [
            'BLOGS' => Inertia::defer(fn () => $blogs),
        ]);
    }

    /**
     * Display the specified blog by slug
     * 
     * @param string $slug
     * @return \Inertia\Response 
     */
    public function show(string $slug): Response
    {
        $blogs = Cache::remember('blogs.related', 3600, function () {
            return Blog::filter()->paginate(5);
        });
        
        $blog = Cache::remember("blogs?.slug={$slug}", 3600, function () use ($slug) {
            return Blog::filter()->slug($slug)->firstOrFail();
        });

        return Inertia::render('blog/BlogDetail', [
            'BLOG' => Inertia::defer(fn () => $blog),
            'BLOGS' => Inertia::defer(fn () => $blogs),
        ]);
    }
}
