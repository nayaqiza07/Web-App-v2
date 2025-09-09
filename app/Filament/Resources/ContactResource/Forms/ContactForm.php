<?php

namespace App\Filament\Resources\ContactResource\Forms;

use Filament\Schemas\Schema;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;

class ContactForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
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
}
