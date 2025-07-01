<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('blog')->group(function () {
    Route::get('/', function () {
        return Inertia::render('blog/BlogList');
    })->name('blog');
});
