<?php

namespace App\Http\Controllers;

use App\Models\Blog;
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
        $blogs = Blog::filter()->paginate(15);

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
        $blog = Blog::filter()->slug($slug)->firstOrFail();

        return Inertia::render('blog/BlogDetail', [
            'BLOG' => Inertia::defer(fn () => $blog),
        ]);
    }
}
