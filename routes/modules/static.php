<?php

use App\Http\Controllers\FaqController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/services', function () {
    return Inertia::render('static/Services');
})->name('services');

Route::get('/about-us', function () {
    return Inertia::render('static/AboutUs');
})->name('about-us');

Route::prefix('support')->name('support.')->controller(FaqController::class)->group(function () {
    /**
     * 1 Faq List (index)
     */
    Route::get('/', 'index')->name('index');
});

Route::prefix('contact-us')->name('contact-us.')->controller(FaqController::class)->group(function () {
    /**
     * 1 Faq List on Contact Us Page (indexOnContactUs)
     */
    Route::get('/', 'indexOnContactUs')->name('indexOnContactUs');
});