<?php

namespace App\Filament\Resources\FaqResource\Infolist;

use App\Models\Faq;
use Filament\Forms\Components\Placeholder;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class FaqsInfolist
{
    public static function configure(Schema $schema)
    {
        return $schema
            ->components([
                Section::make()
                    ->schema([
                        TextEntry::make('question'),
                        TextEntry::make('answer'),
                        TextEntry::make('is_visible')
                            ->label('Visibility')
                            ->formatStateUsing(fn (bool $state): string => $state ? '• Visible •' : '• Invisible •')
                            ->badge()
                            ->color(fn (string $state): string => match ($state) {
                                '0' => 'danger',
                                '1' => 'success',
                            }),
                    ])->columnSpan(['lg' => fn (?Faq $record) => $record === null ? 3 : 2]),

                Section::make()
                    ->schema([
                        Placeholder::make('created_at')
                            ->label('Created at')
                            ->content(fn (Faq $record): ?string => $record->created_at?->diffForHumans()),

                        Placeholder::make('updated_at')
                            ->label('Last modified at')
                            ->content(fn (Faq $record): ?string => $record->updated_at?->diffForHumans())
                    ])
                    ->hidden(fn (?Faq $record) => $record === null)
                    ->columnSpan(['lg' => 1])
            ])->columns(3);
    }
}
