<?php

namespace App\Filament\Resources\BlogResource\Pages;

use App\Filament\Exports\BlogExporter;
use App\Filament\Imports\BlogImporter;
use Filament\Actions\CreateAction;
use Filament\Schemas\Components\Tabs\Tab;
use App\Filament\Resources\BlogResource;
use App\Models\Blog;
use Filament\Actions;
use Filament\Actions\ExportAction;
use Filament\Actions\Exports\Enums\ExportFormat;
use Filament\Actions\Exports\Models\Export;
use Filament\Actions\ImportAction;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Validation\Rules\File;

class ListBlogs extends ListRecords
{
    protected static string $resource = BlogResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
            ImportAction::make()
                ->icon('heroicon-o-arrow-down-tray')
                ->label('Import')
                ->importer(BlogImporter::class)
                ->fileRules([
                    File::types(['csv', 'xlsx'])
                ])
                ->maxRows(100),
            ExportAction::make()
                ->icon('heroicon-o-document-arrow-down')
                ->label('Export')
                ->exporter(BlogExporter::class)
                ->columnMappingColumns(3)
                ->formats([
                    ExportFormat::Csv,
                    ExportFormat::Xlsx,
                ])
                ->fileName(fn (Export $export): string => "blogs-{$export->getKey()}")
        ];
    }

    public function getTabs(): array
    {
        return [
            'All' => Tab::make(),

            'Visible' => Tab::make()
                ->modifyQueryUsing(fn (Builder $query) => $query->where('is_visible', true))
                ->badge(Blog::query()->where('is_visible', true)->count())
                ->badgeColor('success'),

            'Invisible' => Tab::make()
                ->modifyQueryUsing(fn (Builder $query) => $query->where('is_visible', false))
                ->badge(Blog::query()->where('is_visible', false)->count())
                ->badgeColor('danger'),
        ];
    }
}
