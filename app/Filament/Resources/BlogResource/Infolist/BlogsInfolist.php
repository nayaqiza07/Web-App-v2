<?php

namespace App\Filament\Resources\BlogResource\Infolist;

use App\Models\Blog;
use Filament\Forms\Components\Placeholder;
use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class BlogsInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Group::make()
                    ->schema([
                        Section::make()
                            ->schema([
                                TextEntry::make('title'),
                                TextEntry::make('slug')
                                    ->badge(),
                                ImageEntry::make('thumbnail')
                                    ->columnSpanFull(),
                            ])
                            ->compact()
                            ->secondary()
                            ->columns(2)
                            ->columnSpanFull(),
                        
                        Section::make()
                            ->schema([
                                TextEntry::make('body')
                                    ->html()
                            ])
                            ->compact()
                            ->secondary()
                            ->columnSpanFull()
                    ])
                    ->columnSpan(['lg' => fn (?Blog $record) => $record === null ? 3 : 2]),

                Group::make()
                    ->schema([
                        Section::make('Status')
                            ->schema([
                                TextEntry::make('is_visible')
                                    ->label('Visibility')
                                    ->formatStateUsing(fn (bool $state): string => $state ? '• Visible •' : '• Invisible •')
                                    ->badge()
                                    ->color(fn (bool $state): string => $state ? 'success' : 'danger'),
                                TextEntry::make('published_at')
                                    ->dateTime('d M Y, H:i:s')
                            ])
                            ->compact()
                            ->secondary(),

                        Section::make()
                            ->schema([
                                Placeholder::make('created_at')
                                    ->label('Created at')
                                    ->dateTimeTooltip()
                                    ->content(fn (Blog $record): ?string => $record->created_at?->diffForHumans()),

                                Placeholder::make('updated_at')
                                    ->label('Last modified at')
                                    ->dateTimeTooltip()
                                    ->content(fn (Blog $record): ?string => $record->updated_at?->diffForHumans()),

                                Placeholder::make('deleted_at')
                                    ->label('Deleted at')
                                    ->dateTimeTooltip()
                                    ->content(fn (Blog $record): ?string => $record->deleted_at?->diffForHumans())
                                    ->hidden(fn (?Blog $record) => is_null($record?->deleted_at))
                            ])
                            ->compact()
                            ->secondary()
                            ->hidden(fn (?Blog $record) => $record === null)
                            ->columnSpan(['lg' => 1])
                    ])
            ])->columns(3);
    }
}
