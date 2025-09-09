<?php

namespace App\Mail;

use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Number;

class OrderInvoiceMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address('horestco@example.com', 'Horestco'),
            to: [
                new Address('customer@example.com', 'Customer'),
            ],
            subject: 'Order Invoice Mail',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'mail.order-invoice',
            with: [
                'order_number' => '#00001',
                'payment_method' => 'Midtrans',
                'shipment_id' => '#232157378',
                'shipped_via' => 'Horestco Container',
                'shipped_date_time' => '21 July 2025, 21:00 (GMT+7)',
                'shipping_fee' => Number::currency(300000, in: 'IDR'),
                'payment_fee' => Number::currency(1000000, in: 'IDR'),
                'amount_paid' => Number::currency(1300000, in: 'IDR'),
                'address' => 'Jalan Mantingan, RT.12/RW.05, Langon, Tahunan, Jepara Regency, Central Java 59425',
            ]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
