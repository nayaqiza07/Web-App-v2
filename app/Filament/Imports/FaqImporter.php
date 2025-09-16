<?php

namespace App\Filament\Imports;

use App\Models\Faq;
use Filament\Actions\Imports\ImportColumn;
use Filament\Actions\Imports\Importer;
use Filament\Actions\Imports\Models\Import;
use Illuminate\Support\Number;

class FaqImporter extends Importer
{
    protected static ?string $model = Faq::class;

    public static function getColumns(): array
    {
        return [
            ImportColumn::make('question')
                ->requiredMapping()
                ->rules(['required', 'max:255']),
            ImportColumn::make('answer'),
            ImportColumn::make('is_visible')
                ->requiredMapping()
                ->boolean()
                ->rules(['required', 'boolean']),
            ImportColumn::make('published_at')
                ->rules(['date']),
        ];
    }

    public function resolveRecord(): Faq
    {
        return Faq::firstOrNew([
            'question' => $this->data['question'],
        ]);
    }

    public static function getCompletedNotificationBody(Import $import): string
    {
        $body = 'Your faq import has completed and ' . Number::format($import->successful_rows) . ' ' . str('row')->plural($import->successful_rows) . ' imported.';

        if ($failedRowsCount = $import->getFailedRowsCount()) {
            $body .= ' ' . Number::format($failedRowsCount) . ' ' . str('row')->plural($failedRowsCount) . ' failed to import.';
        }

        return $body;
    }
}
