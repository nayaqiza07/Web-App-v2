<?php

use App\Http\Controllers\CartItemController;
use Illuminate\Support\Facades\Route;

Route::prefix('cart')->name('cart.')->controller(CartItemController::class)->group(function () {
    Route::get('/', 'index')->name('index');
})->middleware(['auth', 'verified']);