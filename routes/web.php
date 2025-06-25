<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/welcome', function () {
    return Inertia::render('welcome');
})->name('welcome');

Route::get('/', function () {
    return Inertia::render('home/Home');
})->name('home');

Route::get('/products', function () {
    return Inertia::render('shop/ProductList');
})->name('products');

Route::get('/products/1', function () {
    return Inertia::render('shop/ProductDetail');
})->name('product-detail');

Route::get('/blog', function () {
    return Inertia::render('blog/BlogList');
})->name('blog');

Route::get('/services', function () {
    return Inertia::render('static/Services');
})->name('services');

Route::get('/contact-us', function () {
    return Inertia::render('static/ContactUs');
})->name('contact-us');

Route::get('/about-us', function () {
    return Inertia::render('static/AboutUs');
})->name('about-us');

Route::get('/cart', function () {
    return Inertia::render('cart/Cart');
})->name('cart');

Route::get('/support', function () {
    return Inertia::render('static/Support');
})->name('support');

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
