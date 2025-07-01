<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/services', function () {
    return Inertia::render('static/Services');
})->name('services');

Route::get('/contact-us', function () {
    return Inertia::render('static/ContactUs');
})->name('contact-us');

Route::get('/about-us', function () {
    return Inertia::render('static/AboutUs');
})->name('about-us');

Route::get('/support', function () {
    return Inertia::render('static/Support');
})->name('support');