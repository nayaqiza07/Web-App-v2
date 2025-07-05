<?php

use App\Models\Product;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

Route::get('/welcome', function () {
    return Inertia::render('welcome');
})->name('welcome');

Route::get('/', function () {
    $products = Product::all();
    
    return Inertia::render('home/Home', [
         'PRODUCTS' => $products ?? []
    ]);
})->name('home');

Route::get('/cart', function () {
    return Inertia::render('cart/Cart');
})->name('cart');

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

require __DIR__.'/modules/product.php';
require __DIR__.'/modules/blog.php';
require __DIR__.'/modules/static.php';
