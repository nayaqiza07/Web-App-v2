<?php

namespace App\Filament\Resources\OrderResource\Pages;

use App\Filament\Exports\OrderExporter;
use Filament\Schemas\Components\Tabs\Tab;
use App\Filament\Resources\OrderResource;
use App\Models\Order;
use Filament\Actions;
use Filament\Actions\ExportAction;
use Filament\Actions\Exports\Enums\ExportFormat;
use Filament\Actions\Exports\Models\Export;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Database\Eloquent\Builder;

class ListOrders extends ListRecords
{
    protected static string $resource = OrderResource::class;

    protected function getHeaderActions(): array
    {
        return [
            ExportAction::make()
                ->icon('heroicon-o-document-arrow-down')
                ->label('Export')
                ->color('primary')
                ->exporter(OrderExporter::class)
                ->columnMappingColumns(3)
                ->formats([
                    ExportFormat::Xlsx,
                    ExportFormat::Csv,
                ])
                ->fileName(fn (Export $export): string => "orders-{$export->getKey()}")
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

            'canceled' => Tab::make('Canceled')
                ->query(fn ($query) => $query->where('order_status', 'canceled'))
                ->badge(Order::query()->where('order_status', 'canceled')->count())
                ->badgeColor('danger'),
        ];
    }
}
