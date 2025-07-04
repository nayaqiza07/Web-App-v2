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
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Toggle;
use Filament\Support\RawJs;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $slug = 'shop/products';

    protected static ?string $recordTitleAttribute = 'name';

    protected static ?string $navigationGroup = 'Shop';

    protected static ?string $navigationIcon = 'heroicon-o-tag';

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

                        FileUpload::make('thumbnail')
                            ->columnSpanFull(),
                    ])
                    ->columns(2),

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

                    /** Description Section */
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

                    /** Inventory Section */
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
                    /** Status Section */
                   Section::make('Status')
                    ->schema([
                        Toggle::make('is_visible')
                            ->label('Visible to customers')
                            ->helperText('This product will be hidden')
                            ->default(true),

                        DatePicker::make('published_at')
                            ->suffixIcon('heroicon-m-calendar-days')
                            ->label('Availability')
                            ->default(now())
                            ->required()
                            ->native(false)
                            ->closeOnDateSelection(),
                    ]),
                        
                    /** Relation Section */
                    Section::make('Relation')
                    ->schema([
                        Select::make('category_id')
                            ->suffixIcon('heroicon-m-tag')
                            ->label('Categories')
                            ->relationship('category', 'name')
                            ->required()
                            ->native(false),
                    ]),
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
                    ->label('Thumbnail')
                    ->width(50)
                    ->height(50),
                    
                TextColumn::make('name')
                    ->label('Name')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('category.name')
                    ->label('Category')
                    ->searchable()
                    ->sortable(),

                IconColumn::make('is_visible')
                    ->label('Visibility')
                    ->sortable()
                    ->toggleable(),

                TextColumn::make('price')
                    ->label('Price')
                    ->money('IDR', true)
                    ->searchable()
                    ->sortable()
                    ->toggleable(),

                TextColumn::make('sku')
                    ->label('SKU')
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
                    ->label('Published date')
                    ->searchable()
                    ->sortable()
                    ->toggleable()
                    ->toggledHiddenByDefault(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
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
