<?php

namespace App\Filament\Resources\ProductResource\Infolist;

use App\Models\Product;
use Filament\Forms\Components\Placeholder;
use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\KeyValueEntry;
use Filament\Infolists\Components\RepeatableEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class ProductsInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Group::make()
                    ->schema([
                        Section::make('Product Details')
                            ->schema([
                                TextEntry::make('name'),
                                TextEntry::make('slug'),
                                TextEntry::make('sku')
                                    ->badge()
                                    ->color('gray'),
                                TextEntry::make('category.name')
                                    ->label('Category')
                                    ->badge(),
                                TextEntry::make('stock'),
                                TextEntry::make('security_stock'),
                            ])
                            ->compact()
                            ->secondary()
                            ->columns(2)
                            ->columnSpanFull(),
                        
                        Section::make('Images')
                            ->schema([
                                ImageEntry::make('thumbnail')
                                    ->columnSpanFull(),

                                RepeatableEntry::make('Additional Image')
                                    ->schema([
                                        TextEntry::make('product_images.path'),
                                    ])
                                    ->columns(2)
                            ])
                            ->compact()
                            ->secondary(),

                        Section::make('Pricing')
                            ->schema([
                                TextEntry::make('price')
                                    ->money('IDR'),
                                TextEntry::make('old_price')
                                    ->money('IDR'),
                            ])
                            ->compact()
                            ->secondary()
                            ->columns(2)
                            ->columnSpanFull(),

                        Section::make('Description')
                            ->schema([
                                TextEntry::make('information')
                                    ->columnSpanFull(),
                                KeyValueEntry::make('dimensions')
                                    ->keyLabel('Dimension')
                                    ->valueLabel('Size'),
                                KeyValueEntry::make('materials')
                                    ->keyLabel('Part')
                                    ->valueLabel('List'),
                                TextEntry::make('shipping'),
                            ])
                            ->compact()
                            ->secondary()
                            ->columns(2)
                            ->columnSpanFull()
                    ])
                    ->columnSpan(['lg' => fn (?Product $record) => $record === null ? 3 : 2]),

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
                                    ->content(fn (Product $record): ?string => $record->created_at?->diffForHumans()),

                                Placeholder::make('updated_at')
                                    ->label('Last modified at')
                                    ->dateTimeTooltip()
                                    ->content(fn (Product $record): ?string => $record->updated_at?->diffForHumans()),

                                Placeholder::make('deleted_at')
                                    ->label('Deleted at')
                                    ->dateTimeTooltip()
                                    ->content(fn (Product $record): ?string => $record->deleted_at?->diffForHumans())
                                    ->hidden(fn (?Product $record) => is_null($record?->deleted_at))
                            ])
                            ->compact()
                            ->secondary()
                            ->hidden(fn (?Product $record) => $record === null)
                            ->columnSpan(['lg' => 1])
                    ])
            ])->columns(3);
    }
}
