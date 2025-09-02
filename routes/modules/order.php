<?php

use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Route;

Route::prefix('order')->name('order.')->controller(OrderController::class)->group(function () {
    // Route::get('/', 'index')->name('index');
    Route::post('/', 'store')->name('store');
    // TODO: add show route for order details
    // Route::get('/orders/{order:code}')->name('show');
    Route::delete('/{order}', 'destroy')->name('destroy');
})->middleware(['auth', 'verified']);