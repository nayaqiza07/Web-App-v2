<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ContactResource\Pages;
use App\Models\Contact;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ContactResource extends Resource
{
    protected static ?string $model = Contact::class;
    
    protected static ?string $slug = 'content/contacts';

    protected static ?string $recordTitleAttribute = 'email_us';

    protected static ?string $navigationGroup = 'Content Management';

    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-left-right';

    protected static ?string $activeNavigationIcon = 'heroicon-m-chat-bubble-left-right';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make()
                ->schema([
                    Forms\Components\TextInput::make('email_us')
                            ->label('Email')
                            ->required()
                            ->maxLength(255)
                            ->live(onBlur: true),

                    Forms\Components\TextInput::make('chat_us')
                            ->label('Chat')
                            ->maxLength(255),

                    Forms\Components\TextInput::make('call_us')
                            ->label('Call')
                            ->maxLength(255),

                    Forms\Components\Textarea::make('visit_us')
                            ->label('Visit')
                            ->maxLength(255),

                    Forms\Components\TextInput::make('our_coordinate')
                            ->label('Coordinate')
                            ->maxLength(255),
                ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('email_us')
                    ->label('Email')
                    ->toggleable(),
                Tables\Columns\TextColumn::make('chat_us')
                    ->label('Chat')
                    ->toggleable(),
                Tables\Columns\TextColumn::make('call_us')
                    ->label('Call')
                    ->toggleable(),
                Tables\Columns\TextColumn::make('visit_us')
                    ->label('Visit')
                    ->limit(25)
                    ->toggleable(),
                Tables\Columns\TextColumn::make('our_coordinate')
                    ->label('Coordinate')
                    ->limit(25)
                    ->toggleable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageContacts::route('/'),
        ];
    }
}
