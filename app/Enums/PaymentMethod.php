<?php

namespace App\Enums;

enum PaymentMethod: string
{
    case CARD               = 'card';
    case BANK_TRANSFER      = 'bank_transfer';
    case E_WALLET           = 'e_wallet';
    case OVER_THE_COUNTER   = 'over_the_counter';
    case CARDLESS_CREDIT    = 'cardless_credit';
}
