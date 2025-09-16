<?php

namespace App\Filament\Resources\CategoryResource\Pages;

use App\Filament\Exports\CategoryExporter;
use App\Filament\Imports\CategoryImporter;
use Filament\Actions\CreateAction;
use Filament\Schemas\Components\Tabs\Tab;
use App\Filament\Resources\CategoryResource;
use App\Models\Category;
use Filament\Actions;
use Filament\Actions\ExportAction;
use Filament\Actions\Exports\Enums\ExportFormat;
use Filament\Actions\Exports\Models\Export;
use Filament\Actions\ImportAction;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Validation\Rules\File;

class ListCategories extends ListRecords
{
    protected static string $resource = CategoryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
            ImportAction::make()
                ->icon('heroicon-o-arrow-down-tray')
                ->label('Import')
                ->importer(CategoryImporter::class)
                ->fileRules([
                    File::types(['csv', 'xlsx'])
                ])
                ->maxRows(250),
            ExportAction::make()
                ->icon('heroicon-o-document-arrow-down')
                ->label('Export')
                ->exporter(CategoryExporter::class)
                ->columnMappingColumns(3)
                ->formats([
                    ExportFormat::Csv,
                    ExportFormat::Xlsx
                ])
                ->fileName(fn (Export $export): string => "categories-{$export->getKey()}")
        ];
    }

    public function getTabs(): array
    {
        return [
            'All' => Tab::make(),

            'Visible' => Tab::make()
                ->modifyQueryUsing(fn (Builder $query) => $query->where('is_visible', true))
                ->badge(Category::query()->where('is_visible', true)->count())
                ->badgeColor('success'),

            'Invisible' => Tab::make()
                ->modifyQueryUsing(fn (Builder $query) => $query->where('is_visible', false))
                ->badge(Category::query()->where('is_visible', false)->count())
                ->badgeColor('danger'),
        ];
    }
}
