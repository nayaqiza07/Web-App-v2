<?php

namespace App\Filament\Resources\CategoryResource\Widgets;

use App\Models\Category;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class CategoryStatsWidget extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total categories', Category::count()),
            Stat::make('Visible categories', Category::where('is_visible', true)->count()),
            Stat::make('Invisible categories', Category::where('is_visible', false)->count()),
        ];
    }
}
