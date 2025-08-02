<?php

use App\Http\Controllers\CartItemController;
use Illuminate\Support\Facades\Route;

Route::prefix('cart')->name('cart.')->controller(CartItemController::class)->group(function () {
    Route::get('/', 'index')->name('index');
    Route::post('/', 'store')->name('store');
    Route::put('/{cart}', 'update')->name('update');
    Route::delete('/{cart}', 'delete')->name('delete');
})->middleware(['auth', 'verified']);