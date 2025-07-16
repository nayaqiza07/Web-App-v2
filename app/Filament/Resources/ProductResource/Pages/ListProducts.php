<?php

namespace App\Filament\Resources\ProductResource\Pages;

use App\Filament\Resources\ProductResource;
use App\Models\Product;
use Filament\Actions;
use Filament\Resources\Components\Tab;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Database\Eloquent\Builder;

class ListProducts extends ListRecords
{
    protected static string $resource = ProductResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }

    public function getTabs(): array
    {
        return [
            'All' => Tab::make(),

            'Visible' => Tab::make()
                ->modifyQueryUsing(fn (Builder $query) => $query->where('is_visible', true))
                ->badge(Product::query()->where('is_visible', true)->count())
                ->badgeColor('success'),

            'Invisible' => Tab::make()
                ->modifyQueryUsing(fn (Builder $query) => $query->where('is_visible', false))
                ->badge(Product::query()->where('is_visible', false)->count())
                ->badgeColor('danger'),
        ];
    }
}
