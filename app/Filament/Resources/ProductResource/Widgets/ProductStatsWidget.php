<?php

namespace App\Filament\Resources\ProductResource\Widgets;

use App\Models\Product;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class ProductStatsWidget extends StatsOverviewWidget
{
    public ?Product $record;

    protected function getStats(): array
    {
        return [
            Stat::make('Total products', Product::count()),
            Stat::make('Visible products', Product::where('is_visible', true)->count()),
            Stat::make('New products this month', Product::where('created_at', '>=', now()->subMonth())->count()),
        ];
    }
}
