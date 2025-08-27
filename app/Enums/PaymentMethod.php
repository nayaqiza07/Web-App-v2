<?php

namespace App\Enums;

enum PaymentMethod: string
{
    case MIDTRANS_QRIS = 'midtrans_qris';
    case MIDTRANS_VA_BCA = 'midtrans_va_bca';
    case MIDTRANS_VA_BRI = 'midtrans_va_bri';
    case MIDTRANS_VA_BNI = 'midtrans_va_bni';
    case MIDTRANS_VA_MANDIRI = 'midtrans_va_mandiri';
}
