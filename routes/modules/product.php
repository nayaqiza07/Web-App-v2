<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

// Product Route
Route::prefix('products')->name('products.')->controller(ProductController::class)->group(function () {
    /**  
     * 1. Product List (index) 
     */
    Route::get('/', 'index')->name('index');

    /** 
     * 2. Product Detail (show)
     */
    Route::get('/{slug}', 'show')->name('show');
    
    /** 
     * 3. Product List by Category (showByCategory) 
     */
    Route::get('/category/{slug}', 'showByCategory')->name('showByCategory');
});
