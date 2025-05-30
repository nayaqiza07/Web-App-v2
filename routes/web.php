<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/welcome', function () {
    return Inertia::render('welcome');
})->name('welcome');

Route::get('/', function () {
    return Inertia::render('home/Home');
})->name('home');

Route::get('/shop', function () {
    return Inertia::render('shop/ProductList');
})->name('shop');

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

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
