<?php

use App\Http\Controllers\HomeController;
use App\Mail\SubscriptionConfirmationMail;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;

Route::get('/test-email', function () {
    Mail::to('customer@example.com')->send(new SubscriptionConfirmationMail);
});

Route::get('/welcome', function () {
    return Inertia::render('welcome');
})->name('welcome');

Route::get('/', HomeController::class)->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::fallback(function () {
    abort(404);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

require __DIR__.'/modules/blog.php';
require __DIR__.'/modules/cart.php';
require __DIR__.'/modules/order.php';
require __DIR__.'/modules/product.php';
require __DIR__.'/modules/static.php';
