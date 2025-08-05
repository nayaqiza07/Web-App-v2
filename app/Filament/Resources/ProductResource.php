<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Filament\Resources\ProductResource\RelationManagers;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Components\Actions\Action;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Str;


// Components
use Filament\Forms\Components\Group;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Toggle;
use Filament\Support\RawJs;
use Filament\Tables\Actions\Action as ActionsAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Illuminate\Support\HtmlString;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $slug = 'shop/products';

    protected static ?string $recordTitleAttribute = 'name';

    protected static ?string $navigationGroup = 'Shop Management';

    protected static ?string $navigationIcon = 'heroicon-o-cube';
    
    protected static ?string $activeNavigationIcon = 'heroicon-m-cube';

    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Group::make()
                ->schema([
                    Section::make()
                    ->schema([
                        TextInput::make('name')
                            ->required()
                            ->maxLength(255)
                            ->live(onBlur: true)
                            ->afterStateUpdated(function (string $operation, $state, Forms\Set $set) {
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
                            ->content(fn (Product $record): ?string => $record->updated_at?->diffForHumans())
                    ])
                    ->hidden(fn (?Product $record) => $record === null)
                ])
                ->columnSpan(['lg' => 1])
            ])
            ->columns(3);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('thumbnail')
                    ->square()
                    ->label('Thumbnail'),
                    
                TextColumn::make('name')
                    ->label('Name')
                    ->description(fn (Product $record): string => 'SKU: ' . $record->sku)
                    ->limit(25)
                    ->searchable()
                    ->sortable(),

                TextColumn::make('category.name')
                    ->label('Category')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('is_visible')
                    ->label('Visibility')
                    ->badge()
                    ->color(fn (bool $state): string => $state ? 'success' : 'danger')
                    ->formatStateUsing(fn (bool $state): string => $state ? '• Visible •' : '• Invisible •')
                    ->sortable()
                    ->toggleable(),

                TextColumn::make('price')
                    ->label('Price')
                    ->money('IDR', true)
                    ->searchable()
                    ->sortable()
                    ->toggleable(),


                TextColumn::make('stock')
                    ->label("Stock")
                    ->searchable()
                    ->sortable()
                    ->toggleable(),

                TextColumn::make('security_stock')
                    ->label('Security Stock')
                    ->searchable()
                    ->sortable()
                    ->toggleable()
                    ->toggledHiddenByDefault(),

                TextColumn::make('published_at')
                    ->date()
                    ->searchable()
                    ->sortable()
                    ->toggleable(),

                TextColumn::make('deleted_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->emptyStateIcon('heroicon-o-cube')
            ->emptyStateHeading('No products yet')
            ->emptyStateDescription('Once you write your product, it will appear here.')
            ->emptyStateActions([
                ActionsAction::make('create')
                    ->icon('heroicon-m-plus')
                    ->label('Create product')
                    ->url(route('filament.admin.resources.shop.products.create'))
                    ->button()
            ])
            ->filters([
                Tables\Filters\TrashedFilter::make(),
            ])
            ->actions([
                Tables\Actions\ViewAction::make()
                    ->modalHeading(fn ($record) => 'View Product: ' . $record->name),
                Tables\Actions\EditAction::make(),

                Tables\Actions\DeleteAction::make(),
                Tables\Actions\ForceDeleteAction::make(),
                Tables\Actions\RestoreAction::make(),
            ])
            ->recordUrl(null)
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                    Tables\Actions\ForceDeleteBulkAction::make(),
                    Tables\Actions\RestoreBulkAction::make(),
                ]),
            ]);
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

        public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    public static function getNavigationBadgeColor(): ?string
    {
        return static::getModel()::count() > 0 ? 'success' : 'success';
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}
