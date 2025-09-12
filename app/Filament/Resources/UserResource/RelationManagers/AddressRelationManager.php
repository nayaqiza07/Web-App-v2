<?php

namespace App\Filament\Resources\UserResource\RelationManagers;

use Filament\Tables\Columns\TextColumn;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\Action;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class AddressRelationManager extends RelationManager
{
    protected static string $relationship = 'addresses';

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('name')
            ->columns([
                TextColumn::make('label')
                    ->badge(),
                TextColumn::make('recipient_name'),
                TextColumn::make('phone_number'),
                TextColumn::make('country'),
                TextColumn::make('state'),
                TextColumn::make('city'),
                TextColumn::make('street'),
                TextColumn::make('postal_code'),
                TextColumn::make('is_default')   
                    ->label('Default Address')
                    ->badge()
                    ->color(fn (bool $state): string => $state ? 'success' : 'danger')
                    ->formatStateUsing(fn (bool $state): string => $state ? '• Active •' : '• Inactive •')
                    ->sortable()
                    ->searchable()
                    ->toggleable()
                    ->toggledHiddenByDefault(),
            ])
            ->heading(fn () => 'Addresses from: ' . $this->ownerRecord->name)
            ->emptyStateIcon('heroicon-o-map')
            ->emptyStateHeading('No address yet')
            ->emptyStateDescription('Once user write their address, it will appear here.')
            ->filters([
                //
            ])
            ->headerActions([
                // Tables\Actions\CreateAction::make(),
            ])
            ->recordActions([
                // Tables\Actions\EditAction::make(),
                // Tables\Actions\DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
