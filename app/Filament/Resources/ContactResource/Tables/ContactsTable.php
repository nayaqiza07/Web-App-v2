<?php

namespace App\Filament\Resources\ContactResource\Tables;

use Filament\Tables\Actions\ActionGroup;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteAction;
use Filament\Tables\Actions\DeleteBulkAction;
use Filament\Tables\Actions\EditAction;
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
            ->actions([
                ActionGroup::make([
                    EditAction::make(),
                    DeleteAction::make(),
                ])
            ])
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
