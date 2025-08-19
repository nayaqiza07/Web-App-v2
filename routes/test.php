<?php

use App\Mail\PaymentSuccessMail;
use App\Mail\PromotionalNewsletterMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

Route::get('/test-subscription-mail', function () {
    // Mail::to('aaa@example.com')->send(new PromotionalNewsletterMail());
    $url = 'http://web-app-v2.test/products';

    return (new PromotionalNewsletterMail($url))->render();
});

Route::get('/test-payment-mail', function () {
    return (new PaymentSuccessMail())->render();
});