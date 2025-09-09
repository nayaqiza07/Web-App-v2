<?php

namespace App\Filament\Resources\CategoryResource\Infolist;

use App\Models\Category;
use Filament\Forms\Components\Placeholder;
use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class CategoriesInfolist
{
    /**
     * Create a new class instance.
     */
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make()
                    ->schema([
                        TextEntry::make('name'),
                        TextEntry::make('slug')
                            ->badge()
                            ->color('gray'),
                        ImageEntry::make('thumbnail')
                            ->columnSpanFull(),
                        TextEntry::make('is_visible')
                            ->label('Visibility')
                            ->formatStateUsing(fn (bool $state): string => $state ? '• Visible •' : '• Invisible •')
                            ->badge()
                            ->color(fn (bool $state): string => $state ? 'success' : 'danger'),
                    ])
                    ->compact()
                    ->secondary()
                    ->columns(2)
                    ->columnSpan(['lg' => fn (?Category $record) => $record === null ? 3 : 2]),

                Section::make()
                    ->schema([
                        Placeholder::make('created_at')
                            ->label('Created at')
                            ->dateTimeTooltip()
                            ->content(fn (Category $record): ?string => $record->created_at?->diffForHumans()),

                        Placeholder::make('updated_at')
                            ->label('Last modified at')
                            ->dateTimeTooltip()
                            ->content(fn (Category $record): ?string => $record->updated_at?->diffForHumans()),

                        Placeholder::make('deleted_at')
                            ->label('Deleted at')
                            ->dateTimeTooltip()
                            ->content(fn (Category $record): ?string => $record->deleted_at?->diffForHumans())
                            ->hidden(fn (?Category $record) => is_null($record?->deleted_at))
                    ])
                    ->compact()
                    ->secondary()
                    ->hidden(fn (?Category $record) => $record === null)
                    ->columnSpan(['lg' => 1])
            ])->columns(3);
    }
}
