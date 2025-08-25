<?php

use App\Mail\MailbookMail;
use App\Mail\OrderCancelledMail;
use App\Mail\OrderInvoiceMail;
use App\Mail\OrderShippedMail;
use App\Mail\PromotionalNewsletterMail;
use App\Mail\SubscriptionConfirmationMail;
use App\Mail\WelcomeMail;

use Xammie\Mailbook\Facades\Mailbook;

Mailbook::add(MailbookMail::class);

Mailbook::category('Welcome')->group(function () {
    Mailbook::add(new WelcomeMail);
});

Mailbook::category('Orders')->group(function () {
    Mailbook::add(new OrderInvoiceMail);
    Mailbook::add(new OrderCancelledMail);
    Mailbook::add(function () {
      return new OrderShippedMail;
    });
});

Mailbook::category('Subscription')->group(function () {
    // $url = 'http://web-app-v2.test/products';
    Mailbook::add(new PromotionalNewsletterMail);
    Mailbook::add(new SubscriptionConfirmationMail);
});