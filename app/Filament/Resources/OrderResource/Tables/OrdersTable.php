<?php

namespace App\Filament\Resources\OrderResource\Tables;

use App\Enums\OrderStatus;
use Filament\Actions\ActionGroup;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ForceDeleteAction;
use Filament\Actions\ForceDeleteBulkAction;
use Filament\Actions\RestoreAction;
use Filament\Actions\RestoreBulkAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\Summarizers\Sum;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\TrashedFilter;
use Filament\Tables\Grouping\Group;
use Filament\Tables\Table;

class OrdersTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('order_code')
                    ->label('Order Number')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('user.name')
                    ->label('Customer')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('order_status')
                    ->label('Status')
                    ->formatStateUsing(fn (OrderStatus $state) => $state->label())
                    ->badge()
                    ->color(fn (OrderStatus $state) => $state->color())
                    ->icon(fn (OrderStatus $state) => $state->icon())
                    ->searchable()
                    ->sortable(),

                TextColumn::make('total')
                    ->label('Amount')
                    ->money('IDR', true)
                    ->summarize([
                        Sum::make()
                            ->label('Total')
                            ->money('IDR', true)
                    ])
                    ->searchable()
                    ->sortable()
                    ->toggleable(),

                TextColumn::make('created_at')
                    ->label('Order Date')
                    ->date()
                    ->searchable()
                    ->sortable(),                   
            ])
            ->emptyStateIcon('heroicon-o-shopping-bag')
            ->emptyStateHeading('No orders yet')
            ->emptyStateDescription('Once customer make an order, it will appear here.')
            ->filters([
                TrashedFilter::make()
                    ->native(false),
            ])
            ->recordActions([
                ActionGroup::make([
                    ViewAction::make()
                        ->modalHeading(fn ($record) => 'View Order: ' . $record->order_code),
                    EditAction::make(),
                    DeleteAction::make(),
                    ForceDeleteAction::make(),
                    RestoreAction::make()
                ])
            ])
            ->recordUrl(null)
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                    ForceDeleteBulkAction::make(),
                    RestoreBulkAction::make(),
                ]),
            ])
            ->groups([
                Group::make('created_at')
                    ->label('Order date')
                    ->date()
                    ->collapsible(),
            ]);
    }
}
