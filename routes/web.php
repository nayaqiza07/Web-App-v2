<?php

use App\Models\Blog;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

Route::get('/welcome', function () {
    return Inertia::render('welcome');
})->name('welcome');

Route::get('/', function () {
    $products = Product::filter()->get();
    $categories = Category::filter()->get();
    $blogs = Blog::filter()->latest()->get();
    
    return Inertia::render('home/Home', [
        'PRODUCTS' => [
            'data' => Inertia::defer(fn () => $products),
            'total' => Product::filter()->count()
        ],
        'CATEGORIES' => Inertia::defer(fn () => $categories),
        'BLOGS' => [
            'data' => Inertia::defer(fn () => $blogs),
            'total' => Blog::filter()->count()
        ]
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/order', function () {
        return Inertia::render('order/Order');
    })->name('order');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

require __DIR__.'/modules/blog.php';
require __DIR__.'/modules/cart.php';
require __DIR__.'/modules/product.php';
require __DIR__.'/modules/static.php';
