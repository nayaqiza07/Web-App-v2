<?php

namespace App\Filament\Resources\ContactResource\Tables;

use Filament\Actions\ActionGroup;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class ContactsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('email_us')
                    ->label('Email')
                    ->toggleable(),
                TextColumn::make('chat_us')
                    ->label('Chat')
                    ->toggleable(),
                TextColumn::make('call_us')
                    ->label('Call')
                    ->toggleable(),
                TextColumn::make('visit_us')
                    ->label('Visit')
                    ->limit(25)
                    ->toggleable(),
                TextColumn::make('our_coordinate')
                    ->label('Coordinate')
                    ->limit(25)
                    ->toggleable(),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                ActionGroup::make([
                    EditAction::make(),
                    DeleteAction::make(),
                ])
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
