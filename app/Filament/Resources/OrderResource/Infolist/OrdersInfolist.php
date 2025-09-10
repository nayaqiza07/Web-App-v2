<?php

namespace App\Filament\Resources\OrderResource\Infolist;

use App\Enums\OrderStatus;
use App\Models\Order;
use Filament\Forms\Components\Placeholder;
use Filament\Infolists\Components\ImageEntry;
use Filament\Infolists\Components\KeyValueEntry;
use Filament\Infolists\Components\RepeatableEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class OrdersInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Group::make()
                    ->schema([
                        Section::make('Order Details')
                            ->description('You can see details about the order below.')
                            ->schema([
                                TextEntry::make('order_code')
                                    ->label('Order Number')
                                    ->badge()
                                    ->color('gray'),
                                TextEntry::make('user.name'),
                                TextEntry::make('order_status')
                                    ->formatStateUsing(fn (OrderStatus $state) => $state->label())
                                    ->badge()
                                    ->color(fn (OrderStatus $state) => $state->color())
                                    ->icon(fn (OrderStatus $state) => $state->icon()),
                                TextEntry::make('total')
                                    ->money('IDR'),
                                
                                Section::make('Delivery Address')
                                ->schema([
                                        Placeholder::make('address')
                                            ->label('Full Address')
                                            ->content(fn ($record) => $record->address?->street . ', ' . $record->address?->city . ', ' . $record->address?->state . ', ' .$record->address?->country . ', ' .$record->address?->postal_code),
                                    ])
                                    ->compact()
                                    ->secondary()
                                    ->columnSpanFull()
                            ])
                            ->compact()
                            ->secondary()
                            ->columns(2)
                            ->columnSpanFull(),
                        
                        Section::make('Order Items')
                            ->schema([
                                RepeatableEntry::make('orderItems')
                                    ->label('Product')
                                    ->schema([
                                        ImageEntry::make('product.thumbnail')
                                            ->imageHeight(50)
                                            ->square(),
                                        TextEntry::make('product.name')
                                            ->columnSpan(2),
                                        TextEntry::make('product.sku')
                                            ->badge()
                                            ->color('gray')
                                            ->columnSpan(2),
                                        TextEntry::make('quantity')
                                            ->numeric(),
                                        TextEntry::make('unit_price')
                                            ->label('Unit Price')
                                            ->money('IDR')
                                            ->columnSpan(2),
                                        TextEntry::make('subtotal')
                                            ->money('IDR'),
                                    ])
                                    ->columns(5)
                            ])
                            ->compact()
                            ->secondary()
                            ->columnSpanFull()
                    ])
                    ->columnSpan(['lg' => fn (?Order $record) => $record === null ? 3 : 2]),

                Group::make()
                    ->schema([
                        Section::make()
                            ->schema([
                                Placeholder::make('created_at')
                                    ->label('Created at')
                                    ->dateTimeTooltip()
                                    ->content(fn (Order $record): ?string => $record->created_at?->diffForHumans()),

                                Placeholder::make('updated_at')
                                    ->label('Last modified at')
                                    ->dateTimeTooltip()
                                    ->content(fn (Order $record): ?string => $record->updated_at?->diffForHumans()),

                                Placeholder::make('deleted_at')
                                    ->label('Deleted at')
                                    ->dateTimeTooltip()
                                    ->content(fn (Order $record): ?string => $record->deleted_at?->diffForHumans())
                                    ->hidden(fn (?Order $record) => is_null($record?->deleted_at))
                            ])
                            ->compact()
                            ->secondary()
                            ->hidden(fn (?Order $record) => $record === null)
                            ->columnSpan(['lg' => 1])
                    ])
            ])->columns(3);
    }
}
