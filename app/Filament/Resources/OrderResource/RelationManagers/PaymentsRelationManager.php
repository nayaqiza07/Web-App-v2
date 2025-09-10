<?php

namespace App\Filament\Resources\OrderResource\RelationManagers;

use App\Filament\Resources\OrderResource;
use Filament\Actions\ActionGroup;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\CreateAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Support\Icons\Heroicon;
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
            ->emptyStateIcon(Heroicon::CreditCard)
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
