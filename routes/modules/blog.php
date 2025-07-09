<?php

use App\Http\Controllers\BlogController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('blog')->name('blog.')->controller(BlogController::class)->group(function () {
    /**  
     * 1. Blog List (index) 
     */
    Route::get('/', 'index')->name('index');

    /**  
     * 2. Blog Detail (show) 
     */
    Route::get('/{slug}', 'show')->name('show');
    
});
