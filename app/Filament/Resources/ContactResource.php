<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ContactResource\Pages;
use App\Filament\Resources\ContactResource\RelationManagers;
use App\Models\Contact;
use BezhanSalleh\FilamentShield\Contracts\HasShieldPermissions;
use Filament\Forms;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ContactResource extends Resource implements HasShieldPermissions
{
    protected static ?string $model = Contact::class;
    
    protected static ?string $slug = 'content/contacts';

    protected static ?string $recordTitleAttribute = 'email_us';

    protected static ?string $navigationGroup = 'Content Management';

    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-left-right';

    protected static ?string $activeNavigationIcon = 'heroicon-m-chat-bubble-left-right';

    public static function getPermissionPrefixes(): array
    {
        return [
            'view',
            'view_any',
            'create',
            'update',
            'delete',
            'delete_any',
        ];
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make()
                ->schema([
                    TextInput::make('email_us')
                            ->label('Email')
                            ->required()
                            ->maxLength(255)
                            ->live(onBlur: true),

                    TextInput::make('chat_us')
                            ->label('Chat')
                            ->maxLength(255),

                    TextInput::make('call_us')
                            ->label('Call')
                            ->maxLength(255),

                    Textarea::make('visit_us')
                            ->label('Visit')
                            ->maxLength(255),

                    TextInput::make('our_coordinate')
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
