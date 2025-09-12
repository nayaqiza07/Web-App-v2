<?php

namespace App\Filament\Resources\OrderResource\RelationManagers;

use Filament\Actions\ActionGroup;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables\Columns\ColumnGroup;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Grouping\Group;
use Filament\Tables\Table;

class PaymentsRelationManager extends RelationManager
{
    protected static string $relationship = 'payments';

    protected static ?string $recordTitleAttribute = 'order_id';

    public function table(Table $table): Table
    {
        return $table
            ->columns([
                ColumnGroup::make('Details')
                    ->columns([
                        TextColumn::make('transaction_id')
                            ->searchable(),

                        TextColumn::make('transaction_status')
                            ->searchable(),

                        TextColumn::make('amount')
                            ->sortable()
                            ->money('IDR'),
                    ]),

                ColumnGroup::make('Context')
                    ->columns([
                        TextColumn::make('payment_status')
                            ->sortable(),

                        TextColumn::make('payment_method')
                            ->sortable(),
                    ]),
            ])
            ->heading(fn () => 'Payments for Order: ' . $this->ownerRecord->order_code)
            ->emptyStateIcon('heroicon-m-credit-card')
            ->emptyStateHeading('No payments yet')
            ->emptyStateDescription('Once customer make an order, it will appear here.')
            ->headerActions([
                // CreateAction::make(),
            ])
            ->recordActions([
                ActionGroup::make([
                    ViewAction::make()
                        ->modalHeading(fn ($record) => 'View Order: ' . $record->order_code),
                    EditAction::make(),
                    DeleteAction::make(),
                ])
            ])
            ->groupedBulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ])
            ->groups([
                Group::make('paid_at')
                    ->label('Paid date')
                    ->date()
                    ->collapsible(),
            ]);
    }
}
