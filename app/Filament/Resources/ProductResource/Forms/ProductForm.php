<?php

namespace App\Filament\Resources\ProductResource\Forms;

use Filament\Schemas\Schema;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Actions\Action;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Illuminate\Support\Str;
use Illuminate\Support\HtmlString;
use Filament\Support\RawJs;

class ProductForm
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
                                    ->maxLength(255)
                                    ->live(onBlur: true)
                                    ->afterStateUpdated(function (string $operation, $state, Set $set) {
                                        if ($operation !== 'create') {
                                            return;
                                        }

                                        $set ('slug', Str::slug($state));
                                    }),

                                TextInput::make('slug')
                                    ->disabled()
                                    ->dehydrated()
                                    ->required()
                                    ->maxLength(255)
                                    ->unique(Product::class, 'slug', ignoreRecord: true),
                            ])
                            ->columns(2),

                        Section::make('Images')
                            ->schema([
                                FileUpload::make('thumbnail')
                                    ->image()
                                    ->directory('images/products/thumbnails')
                                    ->hint(new HtmlString('
                                        <a target="_blank" href="https://tinypng.com/">Have you compressed the image?</a>
                                    '))
                                    ->hintColor('primary')
                                    ->helperText(new HtmlString('
                                        <p>
                                            Max image size <strong>2 MB</strong>
                                        </p>
                                        <p>
                                            Compress the image here first 
                                            <strong><a href="https://tinypng.com/">TinyPng</a></strong> 
                                        </p>
                                    '))
                                    ->required()
                                    ->columnSpanFull(),

                                Repeater::make('Images')
                                    ->relationship('productImages')
                                    ->label('Additional Images')
                                    ->schema([
                                        FileUpload::make('path')
                                            ->image()
                                            ->directory('images/products/gallery')
                                            ->label('Image File')
                                            ->required()
                                            ->hint(new HtmlString('
                                                <strong><a target="_blank" href="https://tinypng.com/">TinyPng</a></strong>
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
                                            ')),
                                            
                                        TextInput::make('alt')
                                            ->maxLength(255)
                                            ->label('Alt Text')
                                            ->nullable()
                                            ->helperText(new HtmlString('
                                                <p>
                                                    <strong>Avoid the words</strong>: "image" or "picture"
                                                </p>
                                                <p>
                                                    <strong>Example</strong>: "Map of the location of the headquarters in Jakarta."
                                                </p>
                                            ')),
                                    ])
                                    ->grid(2)
                                    ->minItems(0)
                                    ->maxItems(5)
                                    ->defaultItems(0)
                                    ->collapsible()
                                    ->reorderable()
                                    ->addActionLabel('Add more images')
                                    ->itemLabel(fn (array $state): ?string => $state['alt'] ?? null),
                            ]),

                        /** Pricing Section */
                        Section::make('Pricing')
                            ->schema([
                                TextInput::make('price')
                                    ->numeric()
                                    ->rules(['regex:/^\d{1,10}(\.\d{0,2})?$/'])
                                    ->mask(RawJs::make('$money($input)'))
                                    ->stripCharacters(',')
                                    ->required(),

                                    TextInput::make('old_price')
                                    ->label('Compare at price')
                                    ->numeric()
                                    ->mask(RawJs::make('$money($input)'))
                                    ->stripCharacters(',')
                                    ->rules(['regex:/^\d{1,10}(\.\d{0,2})?$/']),
                            ])
                            ->columns(2),

                        /* Description Section */
                        Section::make('Description')
                            ->schema([
                                MarkdownEditor::make('information')
                                    ->columnSpanFull(),

                                KeyValue::make('dimensions')
                                    ->addAction(
                                        fn (Action $action) => $action
                                            ->icon('heroicon-m-plus-circle')
                                            ->iconButton(),
                                    )
                                    ->rules(['array'])
                                    ->keyLabel('Name')
                                    ->keyPlaceholder('Ex: Width')
                                    ->valueLabel('Size')
                                    ->valuePlaceholder('Size in cm')
                                    ->reorderable(),

                                KeyValue::make('materials')
                                    ->addAction(
                                        fn (Action $action) => $action
                                            ->icon('heroicon-m-plus-circle')
                                            ->iconButton(),
                                    )
                                    ->rules(['array'])
                                    ->keyLabel('No')
                                    ->keyPlaceholder('Ex: 1')
                                    ->valueLabel('List')
                                    ->valuePlaceholder('Ex: Stainless')
                                    ->reorderable(),

                                MarkdownEditor::make('shipping')
                                    ->columnSpanFull(),
                            ])
                            ->collapsible()
                            ->columns(2),

                        /* Inventory Section */
                        Section::make('Inventory')
                            ->schema([
                                TextInput::make('sku')
                                    ->label('SKU (Stock Keeping Unit)')
                                    ->required()
                                    ->columnSpanFull(),

                                TextInput::make('stock')
                                    ->numeric()
                                    ->rules(['integer', 'min:0'])
                                    ->required(),

                                TextInput::make('security_stock')
                                    ->label('Security Stock')
                                    ->helperText('The safety stock is the limit stock for your products which alerts you if the product stock will soon be out of stock.')
                                    ->numeric()
                                    ->rules(['integer', 'min:0'])
                                    ->required(),
                            ])
                            ->columns(2)
                    ])
                    ->columnSpan(['lg' => 2]),

               Group::make()
                    ->schema([
                        /* Status Section */
                    Section::make('Status')
                            ->schema([
                                Toggle::make('is_visible')
                                    ->label('Visible to customers')
                                    ->helperText('This product will be hidden')
                                    ->helperText(function (bool $state) {
                                        if ($state === false) {
                                            return 'This product will be hidden';
                                        }

                                        return 'This product will be visible';
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
                            
                        /* Relation Section */
                        Section::make('Relation')
                            ->schema([
                                Select::make('category_id')
                                    ->suffixIcon('heroicon-m-tag')
                                    ->label('Categories')
                                    ->relationship('category', 'name')
                                    ->required()
                                    ->native(false),
                            ]),

                        /* Timestamp Section */
                        Section::make()
                            ->schema([
                                Placeholder::make('created_at')
                                    ->label('Created at')
                                    ->content(fn (Product $record): ?string => $record->created_at?->diffForHumans()),

                                Placeholder::make('updated_at')
                                    ->label('Updated at')
                                    ->content(fn (Product $record): ?string => $record->updated_at?->diffForHumans()),

                                Placeholder::make('deleted_at')
                                    ->label('Deleted at')
                                    ->content(fn (Product $record): ?string => $record->deleted_at?->diffForHumans())
                                    ->hidden(fn (?Product $record) => is_null($record?->deleted_at))
                            ])
                            ->hidden(fn (?Product $record) => $record === null)
                    ])
                    ->columnSpan(['lg' => 1])
            ])
            ->columns(3);
    }
}
