<?php

namespace App\Filament\Resources\OrderResource\Forms;

use Filament\Schemas\Schema;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Grid;
use App\Enums\OrderStatus;
use App\Models\Order;
use Closure;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\ToggleButtons;
use Filament\Infolists\Components\TextEntry;

class OrderForm
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
                                TextInput::make('code')
                                    ->label('Order Number')
                                    ->disabled()
                                    ->dehydrated()
                                    ->required(),

                                Select::make('user_id')
                                    ->relationship('user', 'name')
                                    ->label('Customer')
                                    ->disabled()
                                    ->dehydrated()
                                    ->required(),

                                ToggleButtons::make('order_status')
                                    ->label('Order Status')
                                    ->options(OrderStatus::options())
                                    ->colors(OrderStatus::colors())
                                    ->icons(OrderStatus::icons())
                                    ->inline()
                                    // ->grouped()
                                    ->required()
                                    ->columnSpanFull(),

                                TextInput::make('payment_status')
                                    ->label('Payment Status')
                                    ->disabled()
                                    ->dehydrated()
                                    ->required(),

                                TextInput::make('payment_method')
                                    ->label('Payment Method')
                                    ->disabled()
                                    ->dehydrated()
                                    ->required(),

                                TextInput::make('total')
                                    ->prefix('Rp. ')
                                    ->label('Amount')
                                    ->disabled()
                                    ->dehydrated()
                                    ->numeric()
                                    
                                    ->required(),

                                Section::make('Delivery Address')
                                    ->schema([
                                        Grid::make(4)
                                            ->schema([
                                                TextInput::make('street')
                                                    ->label('Street address')
                                                    ->disabled()
                                                    ->dehydrated()
                                                    ->required()
                                                    ->columnSpanFull(),

                                                TextInput::make('city')
                                                    ->disabled()
                                                    ->dehydrated()
                                                    ->required(),

                                                TextInput::make('state')
                                                    ->label('State / Province')
                                                    ->disabled()
                                                    ->dehydrated()
                                                    ->required(),

                                                TextInput::make('country')
                                                    ->label('Region / Country')
                                                    ->disabled()
                                                    ->dehydrated()
                                                    ->required(),

                                                TextInput::make('postal_code')
                                                    ->label('Postal / Zip Code')
                                                    ->disabled()
                                                    ->dehydrated()
                                                    ->required(),
                                            ])
                                            ->relationship('address'),

                                        Section::make('Full Address')
                                        ->schema([
                                            Placeholder::make('adress')
                                                ->label('')
                                                ->content(fn ($record) => $record->address?->street . ', ' . $record->address?->city . ', ' . $record->address?->state . ', ' .$record->address?->country . ', ' .$record->address?->postal_code),
                                        ])
                                        ->secondary()
                                        ->icon('heroicon-m-map-pin')
                                        ->compact()
                                    ])->columnSpanFull(),
                            ])
                            ->columns(2)
                            ->collapsible(),

                        Repeater::make('orderItems')
                            ->relationship('orderItems')
                            ->schema([
                                Select::make('product_id')
                                    ->label('Product Name')
                                    ->relationship('product', 'name')
                                    ->disabled()
                                    ->dehydrated()
                                    ->columnSpanFull(),

                                Select::make('sku')
                                    ->label('SKU')
                                    ->relationship('product', 'sku')
                                    ->disabled()
                                    ->dehydrated(),

                                TextInput::make('quantity')
                                    ->label('Qty')
                                    ->disabled()
                                    ->numeric(),

                                TextInput::make('price_snapshot')
                                    ->label('Unit Price')
                                    ->prefix('Rp.')
                                    ->disabled()
                                    ->numeric()
                            ])
                            ->columns(3)
                            ->addable(false)
                            ->deletable(false)
                            ->reorderable(false)
                    ])
                    ->columnSpan(2),

                    Group::make()
                    ->schema([
                        Section::make()
                            ->schema([
                                Placeholder::make('created_at')
                                    ->label('Order created at')
                                    ->content(fn (Order $record): ?string => $record->created_at?->diffForHumans() . ' on => ' . $record->created_at->format('d M Y, H:i:s')),

                                Placeholder::make('updated_at')
                                    ->label('Last modified at')
                                    ->content(fn (Order $record): ?string => $record->updated_at?->diffForHumans()),

                                Placeholder::make('deleted_at')
                                    ->label('Deleted at')
                                    ->content(fn (Order $record): ?string => $record->deleted_at?->diffForHumans())
                                    ->hidden(fn (?Order $record) => is_null($record?->deleted_at))
                            ])
                            ->hidden(fn (?Order $record) => $record === null)
                    ])
                    ->columnSpan(['lg' => 1]),
            ])
            ->columns(3);
    }
}
