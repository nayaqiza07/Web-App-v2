<?php

namespace App\Filament\Resources\OrderResource\Pages;

use Filament\Schemas\Components\Tabs\Tab;
use App\Filament\Resources\OrderResource;
use App\Models\Order;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Database\Eloquent\Builder;

class ListOrders extends ListRecords
{
    protected static string $resource = OrderResource::class;

    protected function getHeaderActions(): array
    {
        return [
            // Actions\CreateAction::make(),
        ];
    }

    public function getTabs(): array
    {
        return [
            null => Tab::make('All'),

            'pending' => Tab::make('Pending')
                ->query(fn (Builder $query) => $query->where('order_status', 'pending'))
                ->badge(Order::query()->where('order_status', 'pending')->count()),

            'processing' => Tab::make('Processing')
                ->query(fn ($query) => $query->where('order_status', 'processing'))
                ->badge(Order::query()->where('order_status', 'processing')->count())
                ->badgeColor('warning'),


            'shipped' => Tab::make()
                ->query(fn ($query) => $query->where('order_status', 'shipped'))
                ->badge(Order::query()->where('order_status', 'shipped')->count())
                ->badgeColor('success'),

            'delivered' => Tab::make('Delivered')
                ->query(fn ($query) => $query->where('order_status', 'delivered'))
                ->badge(Order::query()->where('order_status', 'delivered')->count())
                ->badgeColor('success'),

            'cancelled' => Tab::make('Cancelled')
                ->query(fn ($query) => $query->where('order_status', 'cancelled'))
                ->badge(Order::query()->where('order_status', 'cancelled')->count())
                ->badgeColor('danger'),
        ];
    }
}
