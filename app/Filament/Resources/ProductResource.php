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
use Illuminate\Support\HtmlString;
use Filament\Support\RawJs;

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
                Forms\Components\Wizard::make([
                    Forms\Components\Wizard\Step::make('Details')
                        ->schema([
                            Forms\Components\TextInput::make('name')
                                ->required()
                                ->maxLength(255)
                                ->live(onBlur: true)
                                ->afterStateUpdated(function (string $operation, $state, Forms\Set $set) {
                                    if ($operation !== 'create') {
                                        return;
                                    }

                                    $set ('slug', Str::slug($state));
                                }),

                            Forms\Components\TextInput::make('slug')
                                ->disabled()
                                ->dehydrated()
                                ->required()
                                ->maxLength(255)
                                ->unique(Product::class, 'slug', ignoreRecord: true),

                            Forms\Components\Select::make('category_id')
                                ->suffixIcon('heroicon-m-tag')
                                ->label('Categories')
                                ->relationship('category', 'name')
                                ->required()
                                ->native(false)
                                ->columnSpanFull(),
                        ])
                        ->columns(2),

                    Forms\Components\Wizard\Step::make('Images')
                        ->schema([
                            Forms\Components\FileUpload::make('thumbnail')
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
                                ->required(),

                            Forms\Components\Repeater::make('Images')
                                ->relationship('productImages')
                                ->label('Additional Images')
                                ->schema([
                                    Forms\Components\FileUpload::make('path')
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
                                        
                                    Forms\Components\TextInput::make('alt')
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

                    Forms\Components\Wizard\Step::make('Pricing')
                        ->schema([
                            Forms\Components\TextInput::make('price')
                                ->numeric()
                                ->rules(['regex:/^\d{1,10}(\.\d{0,2})?$/'])
                                ->mask(RawJs::make('$money($input)'))
                                ->stripCharacters(',')
                                ->required(),
                            
                            Forms\Components\TextInput::make('old_price')
                                ->label('Compare at price')
                                ->numeric()
                                ->mask(RawJs::make('$money($input)'))
                                ->stripCharacters(',')
                                ->rules(['regex:/^\d{1,10}(\.\d{0,2})?$/']),
                        ]),

                    Forms\Components\Wizard\Step::make('Description')
                        ->schema([
                            Forms\Components\MarkdownEditor::make('information')
                                ->columnSpanFull(),

                            Forms\Components\KeyValue::make('dimensions')
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

                            Forms\Components\KeyValue::make('materials')
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

                            Forms\Components\MarkdownEditor::make('shipping')
                                ->columnSpanFull()
                        ])
                        ->columns(2),

                    Forms\Components\Wizard\Step::make('Inventory')
                        ->schema([
                            Forms\Components\TextInput::make('sku')
                                ->label('SKU (Stock Keeping Unit)')
                                ->required(),

                            Forms\Components\TextInput::make('stock')
                                ->numeric()
                                ->rules(['integer', 'min:0'])
                                ->required(),

                            Forms\Components\TextInput::make('security_stock')
                                ->label('Security Stock')
                                ->helperText('The safety stock is the limit stock for your products which alerts you if the product stock will soon be out of stock.')
                                ->numeric()
                                ->rules(['integer', 'min:0'])
                                ->required(),
                        ]),

                    Forms\Components\Wizard\Step::make('Status')
                        ->schema([
                            Forms\Components\Toggle::make('is_visible')
                                ->label('Visible to customers')
                                ->helperText('This product will be hidden')
                                ->helperText(function (bool $state) {
                                    if ($state === false) {
                                        return 'This product will be hidden';
                                    }

                                    return 'This product will be visible';
                                })
                                ->default(true),

                            Forms\Components\DatePicker::make('published_at')
                                ->suffixIcon('heroicon-m-calendar-days')
                                ->label('Availability')
                                ->default(now())
                                ->required()
                                ->native(false)
                                ->closeOnDateSelection(),
                        ]),
                    ])
                    ->columnSpan(3),

               Forms\Components\Group::make()
                ->schema([
                    /* Timestamp Section */
                    Forms\Components\Section::make()
                    ->schema([
                        Forms\Components\Placeholder::make('created_at')
                            ->label('Created at')
                            ->content(fn (Product $record): ?string => $record->created_at?->diffForHumans()),

                        Forms\Components\Placeholder::make('updated_at')
                            ->label('Updated at')
                            ->content(fn (Product $record): ?string => $record->updated_at?->diffForHumans()),

                        Forms\Components\Placeholder::make('deleted_at')
                            ->label('Deleted at')
                            ->content(fn (Product $record): ?string => $record->deleted_at?->diffForHumans())
                            ->hidden(fn (?Product $record) => is_null($record?->deleted_at))
                    ])
                    ->hidden(fn (?Product $record) => $record === null)
                ])
                ->columnSpan(['lg' => 1])
            ])->columns(4);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('thumbnail')
                    ->square()
                    ->label('Thumbnail'),
                    
                Tables\Columns\TextColumn::make('name')
                    ->label('Name')
                    ->description(fn (Product $record): string => 'SKU: ' . $record->sku)
                    ->limit(25)
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('category.name')
                    ->label('Category')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('is_visible')
                    ->label('Visibility')
                    ->badge()
                    ->color(fn (bool $state): string => $state ? 'success' : 'danger')
                    ->formatStateUsing(fn (bool $state): string => $state ? '• Visible •' : '• Invisible •')
                    ->sortable()
                    ->toggleable(),

                Tables\Columns\TextColumn::make('price')
                    ->label('Price')
                    ->money('IDR', true)
                    ->searchable()
                    ->sortable()
                    ->toggleable(),

                Tables\Columns\TextColumn::make('stock')
                    ->label("Stock")
                    ->searchable()
                    ->sortable()
                    ->toggleable(),

                Tables\Columns\TextColumn::make('security_stock')
                    ->label('Security Stock')
                    ->searchable()
                    ->sortable()
                    ->toggleable()
                    ->toggledHiddenByDefault(),

                Tables\Columns\TextColumn::make('published_at')
                    ->date()
                    ->searchable()
                    ->sortable()
                    ->toggleable(),

                Tables\Columns\TextColumn::make('deleted_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->emptyStateIcon('heroicon-o-cube')
            ->emptyStateHeading('No products yet')
            ->emptyStateDescription('Once you write your product, it will appear here.')
            ->emptyStateActions([
                Tables\Actions\Action::make('create')
                    ->icon('heroicon-m-plus')
                    ->label('Create product')
                    ->url(route('filament.admin.resources.shop.products.create'))
                    ->button()
            ])
            ->filters([
                Tables\Filters\TrashedFilter::make(),
            ])
            ->actions([
                Tables\Actions\ActionGroup::make([
                    Tables\Actions\ViewAction::make()
                        ->modalHeading(fn ($record) => 'View Product: ' . $record->name),
                    Tables\Actions\EditAction::make(),
                    Tables\Actions\DeleteAction::make(),
                    Tables\Actions\ForceDeleteAction::make(),
                    Tables\Actions\RestoreAction::make()
                ])
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
