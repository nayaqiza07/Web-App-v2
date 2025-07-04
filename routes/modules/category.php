<?php

use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;

// Category Route
Route::prefix('products/category')->name('category.')->controller(CategoryController::class)->group(function () {
  // 1. Category List (index)
  // 2. Category Detail (show)
  // Route::get('/{slug}', 'show')->name('show');
});