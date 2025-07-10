<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
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
        $blogs = Blog::filter()->get();

        return Inertia::render('blog/BlogList', [
            'BLOGS' => $blogs
        ]);
    }

    /**
     * Display the specified blog by slug
     * 
     * @param string $slug
     * @return \Inertia\Response
     */
    Public function show(string $slug): Response
    {
        $blog = Blog::filter()->slug($slug)->firstOrFail();

        return Inertia::render('blog/BlogDetail', [
            'BLOG' => $blog
        ]);
    }
}
