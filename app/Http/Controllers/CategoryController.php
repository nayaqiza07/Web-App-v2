<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     * Get all Categories
     */
    public function index()
    {
        // $json = Storage::disk('public')->get('products.json');
        // $products = json_decode($json, true);

        // $categories = collect($products)
        //     -> pluck('category')
        //     -> unique()
        //     -> values();

        $categories = Category::orderBy('name', 'asc')->get();

        return Inertia::render('shop/ProductList', [
            'CATEGORIES' => $categories ?? [],
        ]);
    }

    /**
     * Display the specified resource.
     * Get Category by Slug
     */
    public function show(string $slug)
    {
        $category = Category::where('slug', $slug)->firstOrFail();
        $products = $category->products()->latest()->get();

        if (!$category) {
            abort(404);
        }

        return Inertia::render('shop/ProductList', [
            'CATEGORY' => $category,
            'PRODUCTS' => $products,
        ]);
    }
}
