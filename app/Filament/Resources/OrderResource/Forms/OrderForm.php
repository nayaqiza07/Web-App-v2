<?php

namespace App\Filament\Resources\OrderResource\Forms;

use App\Enums\OrderStatus;
use App\Models\Order;
use Filament\Forms;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Group;
use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Wizard;
use Filament\Forms\Components\Wizard\Step;
use Filament\Forms\Form;
use Illuminate\Support\HtmlString;

class OrderForm
{
    public static function configure(Form $form): Form
    {
        return $form
            ->schema([
                Group::make()
                    ->schema([
                        Section::make('Order Details')
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

                                Select::make('order_status')
                                    ->options([
                                            'pending' => OrderStatus::PENDING->value,
                                            'processing' => OrderStatus::PROCESSING->value,
                                            'shipped' => OrderStatus::SHIPPED->value,
                                            'delivered' => OrderStatus::DELIVERED->value,
                                            'cancelled' => OrderStatus::CANCELED->value
                                    ])
                                    ->label('Order Status')
                                    ->native(false)
                                    ->dehydrated()
                                    ->required(),

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

                                        Placeholder::make('adress')
                                            ->label('Full Address')
                                            ->content(fn ($record) => $record->address?->street . ', ' . $record->address?->city . ', ' . $record->address?->state . ', ' .$record->address?->country . ', ' .$record->address?->postal_code),
                                    ]),


                                

                                
                            ])
                            ->columns(2)
                            ->collapsible(),

                        Repeater::make('orderItems')
                            ->relationship('orderItems')
                            ->schema([
                                Select::make('product_id')
                                    ->label('Product')
                                    ->relationship('product', 'name')
                                    ->disabled()
                                    ->dehydrated()
                                    ->columnSpanFull(),

                                TextInput::make('quantity')
                                    ->label('Qty')
                                    ->disabled()
                                    ->numeric(),

                                TextInput::make('price_snapshot')
                                    ->label('Unit Price')
                                    ->prefix('Rp.')
                                    ->disabled()
                                    ->numeric()
                                    ->columnSpan(5)
                            ])
                            ->columns(6)
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
