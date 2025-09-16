<?php

namespace App\Filament\Resources\ProductResource\Pages;

use App\Filament\Exports\ProductExporter;
use App\Filament\Imports\ProductImporter;
use Filament\Actions\CreateAction;
use Filament\Schemas\Components\Tabs\Tab;
use App\Filament\Resources\ProductResource;
use App\Models\Product;
use Filament\Actions\ExportAction;
use Filament\Actions\Exports\Enums\ExportFormat;
use Filament\Actions\Exports\Models\Export;
use Filament\Actions\ImportAction;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Validation\Rules\File;

class ListProducts extends ListRecords
{
    protected static string $resource = ProductResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
            ImportAction::make()
                ->icon('heroicon-o-arrow-down-tray')
                ->label('Import')
                ->importer(ProductImporter::class)
                ->fileRules([
                    File::types(['csv', 'xlsx'])
                ])
                ->maxRows(250),
            ExportAction::make()
                ->icon('heroicon-o-document-arrow-down')
                ->label('Export')
                ->exporter(ProductExporter::class)
                ->columnMappingColumns(3)
                ->formats([
                    ExportFormat::Xlsx,
                    ExportFormat::Csv,
                ])
                ->fileName(fn (Export $export): string => "products-{$export->getKey()}"),
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
