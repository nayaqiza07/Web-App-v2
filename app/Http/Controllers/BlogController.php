<?php

namespace App\Http\Controllers;

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
        return Inertia::render('blog/BlogList');
    }

    /**
     * Display the specified blog by slug
     * 
     * @param string $slug
     * @return \Inertia\Response
     */
    Public function show(string $slug): Response
    {
        return Inertia::render('blog/BlogDetail');
    }
}
