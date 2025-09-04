<?php

namespace App\Filament\Resources\OrderResource\Pages;

use App\Filament\Resources\OrderResource;
use Filament\Actions;
use Filament\Resources\Components\Tab;
use Filament\Resources\Pages\ListRecords;

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
            'pending' => Tab::make()->query(fn ($query) => $query->where('order_status', 'pending')),
            'processing' => Tab::make()->query(fn ($query) => $query->where('order_status', 'processing')),
            'shipped' => Tab::make()->query(fn ($query) => $query->where('order_status', 'shipped')),
            'delivered' => Tab::make()->query(fn ($query) => $query->where('order_status', 'delivered')),
            'cancelled' => Tab::make()->query(fn ($query) => $query->where('order_status', 'cancelled')),
        ];
    }
}
