<?php

use App\Http\Controllers\CartItemController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])
    ->prefix('cart')->name('cart.')
    ->controller(CartItemController::class)
    ->group(function () {
        Route::get('/', 'index')->name('index');
        Route::post('/', 'store')->name('store');
        Route::put('/{cartItem}', 'update')->name('update');
        Route::delete('/{cartItem}', 'destroy')->name('destroy');
        Route::delete('/', 'clear')->name('clear');
    });