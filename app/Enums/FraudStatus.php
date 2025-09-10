<?php

namespace App\Enums;

enum FraudStatus: string
{
    case ACCEPT = 'accept';
    case DENY   = 'deny';

    public function label(): string
    {
        return match($this) {
            self::ACCEPT => 'Transaction is safe to proceed',
            self::DENY   => 'Transaction is considered as fraud',
        };
    }

    public function color(): string
    {
        return match($this) {
            self::ACCEPT => 'success',
            self::DENY   => 'danger',
        };
    }
}
