<?php

namespace App\Enums;

enum PaymentStatus: string
{
    // case UNPAID     = 'unpaid';
    // case PAID       = 'paid';
    // case REFUNDED   = 'refunded';
    // case FAILED     = 'failed';

    case WAITING    = 'waiting';
    case SUCCESS    = 'success';
    case FAILED     = 'failed';
    case REFUNDED   = 'refunded';
    case ON_HOLD    = 'on_hold';

    public static function fromMidtrans(string $transactionStatus, string $fraudStatus = 'accept'): self
    {
        return match ($transactionStatus) {
            'settlement', 'capture' => $fraudStatus === 'deny'
                ? self::ON_HOLD
                : self::SUCCESS,

            'pending'                   => self::WAITING,
            'expire', 'cancel', 'deny'  => self::FAILED,
            default                     => self::FAILED,
        };
    }

    public function label(): string
    {
        return match($this) {
            self::WAITING  => 'Waiting to be paid',
            self::SUCCESS  => 'Payment successfully',
            self::FAILED   => 'Payment failed',
            self::REFUNDED => 'Payment is refunded to customer',
            self::ON_HOLD  => 'Payment successful but under review',
        };
    }

    public function color(): string
    {
        return match($this) {
            self::WAITING    => 'info',
            self::SUCCESS    => 'success',
            self::FAILED     => 'danger',
            self::REFUNDED   => 'danger',
            self::ON_HOLD    => 'warning',
        };
    }
}