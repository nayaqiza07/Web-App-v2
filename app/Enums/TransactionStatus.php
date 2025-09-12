<?php

namespace App\Enums;

enum TransactionStatus: string
{
    case PENDING    = 'pending';
    case SETTLEMENT = 'settlement';
    case DENY       = 'deny';
    case CANCEL     = 'cancel';
    case EXPIRE     = 'expire';
    case CAPTURE    = 'capture';

    public function label(): string
    {
        return match($this) {
            self::PENDING       => 'Waiting to be paid',
            self::SETTLEMENT    => 'Transaction is successfully settled',
            self::DENY          => 'Transaction rejected',
            self::CANCEL        => 'Transaction is cancelled',
            self::EXPIRE        => 'Transaction is expired',
            self::CAPTURE       => 'Transaction is successful and the card balance is captured successfully',
        };
    }

    public function color(): string
    {
        return match($this) {
            self::PENDING       => 'info',
            self::SETTLEMENT    => 'success',
            self::DENY          => 'warning',
            self::CANCEL        => 'danger',
            self::EXPIRE        => 'danger',
            self::CAPTURE       => 'success',
        };
    }
}
