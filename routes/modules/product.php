<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::prefix('products')
    ->name('products.')
    ->controller(ProductController::class)
    ->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/{slug}', 'show')->name('show');
        Route::get('/category/{slug}', 'showByCategory')->name('showByCategory');
    });
