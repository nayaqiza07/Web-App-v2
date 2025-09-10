<?php

namespace App\Enums;

enum PaymentMethod: string
{
    case CARD               = 'card';
    case BANK_TRANSFER      = 'bank_transfer';
    case E_WALLET           = 'e_wallet';
    case OVER_THE_COUNTER   = 'over_the_counter';
    case CARDLESS_CREDIT    = 'cardless_credit';

    public function label(): string
    {
        return match($this) {
            self::CARD              => 'Credit Card',
            self::BANK_TRANSFER     => 'Bank Transfer',
            self::E_WALLET          => 'E-Wallet',
            self::OVER_THE_COUNTER  => 'Alfamart / Indomaret, dll',
            self::CARDLESS_CREDIT   => 'Kredivo / Akulaku, dll',
        };
    }
}
