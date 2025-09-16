<?php

namespace App\Filament\Resources\FaqResource\Pages;

use App\Filament\Exports\FaqExporter;
use App\Filament\Imports\FaqImporter;
use Filament\Actions\CreateAction;
use Filament\Schemas\Components\Tabs\Tab;
use App\Filament\Resources\FaqResource;
use App\Models\Faq;
use Filament\Actions;
use Filament\Actions\ExportAction;
use Filament\Actions\Exports\Enums\ExportFormat;
use Filament\Actions\Exports\Models\Export;
use Filament\Actions\ImportAction;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Validation\Rules\File;

class ListFaqs extends ListRecords
{
    protected static string $resource = FaqResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
            ImportAction::make()
                ->icon('heroicon-o-arrow-down-tray')
                ->label('Import')
                ->importer(FaqImporter::class)
                ->fileRules([
                    File::types(['csv', 'xlsx'])
                ])
                ->maxRows(250),
            ExportAction::make()
                ->icon('heroicon-o-document-arrow-down')
                ->label('Export')
                ->exporter(FaqExporter::class)
                ->columnMappingColumns(3)
                ->formats([
                    ExportFormat::Xlsx,
                    ExportFormat::Csv,
                ])
                ->fileName(fn (Export $export): string => "faqs-{$export->getKey()}")
        ];
    }

    public function getTabs(): array
    {
        return [
            'All' => Tab::make(),

            'Visible' => Tab::make()
                ->modifyQueryUsing(fn (Builder $query) => $query->where('is_visible', true))
                ->badge(Faq::query()->where('is_visible', true)->count())
                ->badgeColor('success'),

            'Invisible' => Tab::make()
                ->modifyQueryUsing(fn (Builder $query) => $query->where('is_visible', false))
                ->badge(Faq::query()->where('is_visible', false)->count())
                ->badgeColor('danger'),
        ];
    }
}
