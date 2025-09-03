<?php

namespace App\Filament\Resources;

use App\Enums\OrderStatus;
use App\Filament\Resources\OrderResource\Pages;
use App\Filament\Resources\OrderResource\RelationManagers;
use App\Filament\Resources\OrderResource\RelationManagers\OrderItemsRelationManager;
use App\Models\Order;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class OrderResource extends Resource
{
    protected static ?string $model = Order::class;

    protected static ?string $slug = 'shop/orders';

    protected static ?string $navigationGroup = 'Shop Management';

    protected static ?string $navigationIcon = 'heroicon-o-shopping-bag';
    
    protected static ?string $activeNavigationIcon = 'heroicon-m-shopping-bag';

    protected static ?int $navigationSort = 3;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Wizard::make([
                    Forms\Components\Wizard\Step::make('Order Details')
                        ->schema([
                            Forms\Components\TextInput::make('code')
                                ->label('Order Number')
                                ->disabled()
                                ->dehydrated()
                                ->required(),

                            Forms\Components\Select::make('user_id')
                                ->relationship('user', 'name')
                                ->label('Customer')
                                ->disabled()
                                ->dehydrated()
                                ->required(),

                            Forms\Components\Select::make('order_status')
                                ->options([
                                        'pending' => OrderStatus::PENDING->value,
                                        'processing' => OrderStatus::PROCESSING->value,
                                        'shipped' => OrderStatus::SHIPPED->value,
                                        'delivered' => OrderStatus::DELIVERED->value,
                                        'cancelled' => OrderStatus::CANCELED->value
                                ])
                                ->label('Order Status')
                                ->disabled()
                                ->dehydrated()
                                ->required(),

                            Forms\Components\TextInput::make('payment_status')
                                ->label('Payment Status')
                                ->disabled()
                                ->dehydrated()
                                ->required(),

                            Forms\Components\TextInput::make('payment_method')
                                ->label('Payment Method')
                                ->disabled()
                                ->dehydrated()
                                ->required(),

                            Forms\Components\TextInput::make('total')
                                ->prefix('Rp. ')
                                ->label('Amount')
                                ->disabled()
                                ->dehydrated()
                                ->numeric()
                                ->required(),

                            Forms\Components\DateTimePicker::make('created_at')
                                ->label('Order Date')
                                ->disabled()
                                ->dehydrated()
                                ->required(),
                        ])
                        ->columns(2),

                    Forms\Components\Wizard\Step::make('Order Items')
                        ->schema([
                            
                        ])
                ])
                ->columnSpanFull()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('code')
                    ->label('Order Number')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('user.name')
                    ->label('Customer')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('order_status')
                    ->label('Status')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('payment_status')
                    ->label('Payment')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('payment_method')
                    ->label('Payment Method')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('total')
                    ->label('Amount')
                    ->money('IDR', true)
                    ->searchable()
                    ->sortable()
                    ->toggleable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Order Date')
                    ->date()
                    ->searchable()
                    ->sortable(),                   
            ])
            ->emptyStateIcon('heroicon-o-shopping-bag')
            ->emptyStateHeading('No orders yet')
            ->emptyStateDescription('Once customer make an order, it will appear here.')
            ->filters([
                Tables\Filters\TrashedFilter::make(),
            ])
            ->actions([
                Tables\Actions\ActionGroup::make([
                    Tables\Actions\ViewAction::make()
                        ->modalHeading(fn ($record) => 'View Order: ' . $record->name),
                    Tables\Actions\EditAction::make(),
                    Tables\Actions\DeleteAction::make(),
                    Tables\Actions\ForceDeleteAction::make(),
                    Tables\Actions\RestoreAction::make()
                ])
            ])
            ->recordUrl(null)
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }

    public static function getRelations(): array
    {
        return [
            OrderItemsRelationManager::class,
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    public static function getNavigationBadgeColor(): ?string
    {
        return static::getModel()::count() > 0 ? 'success' : 'success';
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListOrders::route('/'),
            'create' => Pages\CreateOrder::route('/create'),
            'edit' => Pages\EditOrder::route('/{record}/edit'),
        ];
    }
}
