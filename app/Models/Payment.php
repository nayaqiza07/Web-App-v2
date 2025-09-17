<?php

namespace App\Models;

use App\Enums\FraudStatus;
use App\Enums\PaymentMethod;
use App\Enums\PaymentStatus;
use App\Enums\TransactionStatus;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Payment extends Model
{
    protected $fillable = [
        'order_id',
        'transaction_id',
        'transaction_status',
        'fraud_status',
        'payment_method',
        'payment_status',
        'response_raw',
        'gross_amount',
        'paid_at'
    ];

    protected $casts = [
        'transaction_status' => TransactionStatus::class,
        'fraud_status'       => FraudStatus::class,
        'payment_method'     => PaymentMethod::class,
        'payment_status'     => PaymentStatus::class,
        'response_raw'       => 'array'
    ];

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }
}
