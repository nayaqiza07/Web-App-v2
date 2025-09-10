<?php

namespace App\Enums;

enum OrderStatus: string
{
    case PENDING    = 'pending';
    case PROCESSING = 'processing';
    case SHIPPED    = 'shipped';
    case DELIVERED  = 'delivered';
    case CANCELED   = 'canceled';

    public function label(): string
    {
        return match ($this) {
            self::PENDING    => 'Pending',
            self::PROCESSING => 'Processing',
            self::SHIPPED    => 'Shipped',
            self::DELIVERED  => 'Delivered',
            self::CANCELED   => 'Cancelled',
        };
    }

    public function color(): string
    {
        return match ($this) {
            self::PENDING                  => 'info',
            self::PROCESSING               => 'warning',
            self::SHIPPED, self::DELIVERED => 'success',
            self::CANCELED                 => 'danger',
        };
    }

    public function icon(): string
    {
        return match ($this) {
            self::PENDING    => 'heroicon-m-clock',
            self::PROCESSING => 'heroicon-m-arrow-path',
            self::SHIPPED    => 'heroicon-m-truck',
            self::DELIVERED  => 'heroicon-m-check-badge',
            self::CANCELED   => 'heroicon-m-x-circle',
        };
    }

    public static function options(): array
    {
        return collect(self::cases())->mapWithKeys(fn ($case) => [
            $case->value => $case->label(),
        ])->toArray();
    }

    public static function colors(): array
    {
        return collect(self::cases())->mapWithKeys(fn ($case) => [
            $case->value => $case->color(),
        ])->toArray();
    }

    public static function icons(): array
    {
        return collect(self::cases())->mapWithKeys(fn ($case) => [
            $case->value => $case->icon(),
        ])->toArray();
    }
}