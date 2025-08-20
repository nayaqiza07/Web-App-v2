<?php

use App\Mail\MailbookMail;
use App\Mail\OrderCancelledMail;
use App\Mail\OrderInvoiceMail;
use App\Mail\OrderShippedMail;
use App\Mail\PromotionalNewsletterMail;
use Xammie\Mailbook\Facades\Mailbook;

Mailbook::add(MailbookMail::class);

Mailbook::category('Orders')->group(function () {
    Mailbook::add(new OrderInvoiceMail);
    Mailbook::add(new OrderCancelledMail);
    Mailbook::add(function () {
      $data = [
        'name' => 'Customer 01',
        'order_number' => '#00001',
        'payment' => 'Midtrans',
        'shipment_id' => '#232157378',
        'shipped_via' => 'Horestco Container',
        'shipped_date_time' => '21 July 2025, 21:00 (GMT+7)',
        'shipping_fee' => 300000,
        'payment_fee' => 1000000,
        'amount_paid' => 1300000,
        'address' => 'Jalan Mantingan, RT.12/RW.05, Langon, Tahunan, Jepara Regency, Central Java 59425',
      ];

      return new OrderShippedMail($data);
    });
});

Mailbook::category('Subscription')->group(function () {
    $url = 'http://web-app-v2.test/products';
    Mailbook::add(new PromotionalNewsletterMail($url));
});