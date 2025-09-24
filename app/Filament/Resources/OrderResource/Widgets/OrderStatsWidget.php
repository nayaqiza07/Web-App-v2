<?php

namespace App\Filament\Resources\OrderResource\Widgets;

use App\Enums\OrderStatus;
use App\Models\Order;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class OrderStatsWidget extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total orders', Order::count()),
            Stat::make('Delivered orders', Order::where('order_status', OrderStatus::DELIVERED)->count()),
            Stat::make('Canceled orders', Order::where('order_status', OrderStatus::CANCELED)->count()),
        ];
    }
}
