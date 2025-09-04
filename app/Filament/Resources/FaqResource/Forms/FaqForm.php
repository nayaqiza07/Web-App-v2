<?php

namespace App\Filament\Resources\FaqResource\Forms;

use App\Models\Faq;
use Filament\Forms\Components\Group;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;

class FaqForm
{
    public static function configure(Form $form): Form
    {
        return $form
            ->schema([
                Group::make()
                ->schema([
                    Section::make()
                    ->schema([
                        TextInput::make('question')
                            ->required()
                            ->maxLength(255)
                            ->live(onBlur: true),

                        RichEditor::make('answer'),

                        Toggle::make('is_visible')
                            ->label('Visible to customers.')
                            ->default(true)
                    ]),
                ])
                ->columnSpan(['lg' => fn (?Faq $record) => $record === null ? 3 : 2]),

                Group::make()
                ->schema([
                    /** Timestamp Section */
                    Section::make()
                    ->schema([
                        Placeholder::make('created_at')
                            ->label('Created at')
                            ->content(fn (Faq $record): ?string => $record->created_at?->diffForHumans()),

                        Placeholder::make('updated_at')
                            ->label('Last modified at')
                            ->content(fn (Faq $record): ?string => $record->updated_at?->diffForHumans())
                    ])
                    ->hidden(fn (?Faq $record) => $record === null)
                ])
                ->columnSpan(['lg' => 1])
            ])
            ->columns(3);
    }
}
