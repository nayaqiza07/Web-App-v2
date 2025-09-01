<?php

use App\Http\Controllers\BlogController;
use Illuminate\Support\Facades\Route;

Route::prefix('blogs')->name('blogs.')->controller(BlogController::class)->group(function () {
    Route::get('/', 'index')->name('index');
    Route::get('/{slug}', 'show')->name('show');
});
