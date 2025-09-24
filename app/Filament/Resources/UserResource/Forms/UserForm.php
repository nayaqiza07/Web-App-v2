<?php

namespace App\Filament\Resources\UserResource\Forms;

use Filament\Schemas\Schema;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;

class UserForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Group::make()
                ->schema([
                    Section::make()
                    ->schema([
                        TextInput::make('name')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('email')
                            ->email()
                            ->required()
                            ->maxLength(255),
                        TextInput::make('phone')
                            ->tel()
                            ->required()
                            ->maxLength(255),
                        TextInput::make('password')
                            ->password()
                            ->required()
                            ->maxLength(255),
                    ])->columns(2),
                ])->columnSpan(2),

                Group::make()
                ->schema([
                    Section::make()
                    ->schema([
                        Select::make('roles')
                            ->multiple()
                            ->native(false)
                            ->relationship('roles', 'name')
                            ->required(),
                        DateTimePicker::make('email_verified_at'),
                    ])
                ])
            ])->columns(3);
    }
}
