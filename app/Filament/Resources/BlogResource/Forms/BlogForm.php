<?php

namespace App\Filament\Resources\BlogResource\Forms;

use Filament\Schemas\Schema;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Utilities\Set;
use App\Models\Blog;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Illuminate\Support\HtmlString;
use Illuminate\Support\Str;

class BlogForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Group::make()
                ->schema([
                    Section::make()
                    ->schema([
                        TextInput::make('title')
                            ->required()
                            ->maxLength(255)
                            ->live(onBlur: true)
                            ->afterStateUpdated(function (string $operation, $state, Set $set) {
                                if ($operation !== 'create'){
                                    return;
                                }

                                $set ('slug', Str::slug($state));
                            }),

                        TextInput::make('slug')
                            ->disabled()
                            ->dehydrated()
                            ->required()
                            ->maxLength(255)
                            ->unique(Blog::class, 'slug', ignoreRecord: true),
                            
                        FileUpload::make('thumbnail')
                            ->image()
                            ->required()
                            ->directory('images/blogs/thumbnails')
                            ->hint(new HtmlString('
                                <strong><a target="_blank" href="https://tinypng.com/">Have you compressed the image?</a></strong>
                            '))
                            ->hintColor('primary')
                            ->helperText(new HtmlString('
                                <p>
                                    Max image size <strong>2 MB</strong>
                                </p>
                                <p>
                                    Compress the image here first 
                                    <strong><a target="_blank" href="https://tinypng.com/">TinyPng</a></strong> 
                                </p>
                            '))
                            ->columnSpanFull(),
                    ])
                    ->columns(2),

                    Section::make()
                    ->schema([
                        RichEditor::make('body')
                    ])
                ])
                ->columnSpan(['lg' => 2]),

                Group::make()
                ->schema([
                    /** Status Section */
                   Section::make('Status')
                    ->schema([
                        Toggle::make('is_visible')
                            ->label('Visible to customers')
                            ->helperText(function (bool $state) {
                                if ($state === false) return 'This content will be hidden';

                                return  'This content will be visible';
                            })
                            ->default(true),

                        DatePicker::make('published_at')
                            ->suffixIcon('heroicon-m-calendar-days')
                            ->label('Availability')
                            ->default(now())
                            ->required()
                            ->native(false)
                            ->closeOnDateSelection(),
                    ]),

                    /** Timestamp Section */
                    Section::make()
                    ->schema([
                        Placeholder::make('created_at')
                            ->label('Created at')
                            ->content(fn (Blog $record): ?string => $record->created_at?->diffForHumans()),

                        Placeholder::make('updated_at')
                            ->label('Updated at')
                            ->content(fn (Blog $record): ?string => $record->updated_at?->diffForHumans())
                    ])
                    ->hidden(fn (?Blog $record) => $record === null)
                ])
                ->columnSpan(['lg' => 1])
            ])
            ->columns(3);
    }
}
