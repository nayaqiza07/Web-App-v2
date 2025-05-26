<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/home', function () {
    return Inertia::render('home/Home');
})->name('home');

Route::get('/shop', function () {
    return Inertia::render('shop/ProductList');
})->name('shop');

Route::get('/blog', function () {
    return Inertia::render('blog/BlogList');
})->name('blog');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
