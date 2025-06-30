<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    // Get Product
    public function index()
    {
        $json = Storage::disk('public')->get('products.json');
        $products = json_decode($json, true);

        return Inertia::render('shop/ProductList', [
            'PRODUCTS' => $products ?? []
        ]);
    }

    // Get Product by Slug
    public function show($slug)
    {
        $json = Storage::disk('public')->get('products.json');
        $products = json_decode($json, true);

        $product = collect($products)->firstWhere('slug', $slug);

        if (!$product) {
            return abort(404);
        }

        return Inertia::render('shop/ProductDetail', [
            'PRODUCTS' => $products ?? [],
            'PRODUCT' => $product ?? []
        ]);
    }
}
