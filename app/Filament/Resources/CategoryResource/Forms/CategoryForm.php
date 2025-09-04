<?php

namespace App\Filament\Resources\CategoryResource\Forms;

use App\Models\Category;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Forms\Set;
use Illuminate\Support\HtmlString;
use Illuminate\Support\Str;

use function PHPUnit\Framework\isNull;

class CategoryForm
{
    public static function configure(Form $form): Form
    {
        return $form
            ->schema([
                // Detail Section
                Section::make()
                ->schema([
                    Grid::make()
                    ->schema([
                        TextInput::make('name')
                            ->required()
                            ->maxLength(255)
                            ->live(onBlur: true)
                            ->afterStateUpdated(fn (string $operation, $state, Set $set) => $operation === 'create' ? $set('slug', Str::slug($state)) : null),
    
                        TextInput::make('slug')
                            ->disabled()
                            ->dehydrated()
                            ->required()
                            ->maxLength(255)
                            ->unique(Category::class, 'slug', ignoreRecord: true),
                    ]),

                    FileUpload::make('thumbnail')
                        ->image()
                        ->required()
                        ->directory('images/categories/thumbnails')
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

                    Toggle::make('is_visible')
                        ->label('Visible to customers.')
                        ->helperText(function (bool $state) {
                            if ($state === false) {
                                return 'This product will be hidden';
                            }

                            return 'This product will be visible';
                        })
                        ->default(true)
                ])
                ->columnSpan(['lg' => fn (?Category $record) => $record === null ? 3 : 2]),

                // Timestamp Section (Hidden when record is empty)
                Section::make()
                ->schema([
                    Placeholder::make('created_at')
                        ->label('Created at')
                        ->content(fn (Category $record): ?string => $record->created_at?->diffForHumans()),

                    Placeholder::make('updated_at')
                        ->label('Last modified at')
                        ->content(fn (Category $record): ?string => $record->updated_at?->diffForHumans()),

                    Placeholder::make('deleted_at')
                        ->label('Deleted at')
                        ->content(fn (Category $record): ?string => $record->delete_at?->diffForHumans())
                        ->hidden(fn (?Category $record) => isNull($record?->deleted_at)),
                ])
                ->columnSpan(['lg' => 1])
                ->hidden(fn (?Category $record) => $record === null)
            ])
            ->columns(3);
    }
}
