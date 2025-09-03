<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CategoryResource\Pages;
use App\Filament\Resources\CategoryResource\RelationManagers\ProductsRelationManager;
use App\Models\Category;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\HtmlString;
use Illuminate\Support\Str;

class CategoryResource extends Resource
{
    protected static ?string $model = Category::class;

    protected static ?string $slug = 'shop/categories';

    protected static ?string $recordTitleAttribute = 'name';

    protected static ?string $navigationGroup = 'Shop Management';

    protected static ?string $navigationIcon = 'heroicon-o-tag';
    
    protected static ?string $activeNavigationIcon = 'heroicon-m-tag';

    protected static ?int $navigationSort = 2;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                // Detail Section
                Forms\Components\Section::make()
                ->schema([
                    Forms\Components\Grid::make()
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->required()
                            ->maxLength(255)
                            ->live(onBlur: true)
                            ->afterStateUpdated(fn (string $operation, $state, Forms\Set $set) => $operation === 'create' ? $set('slug', Str::slug($state)) : null),
    
                        Forms\Components\TextInput::make('slug')
                            ->disabled()
                            ->dehydrated()
                            ->required()
                            ->maxLength(255)
                            ->unique(Category::class, 'slug', ignoreRecord: true),
                    ]),

                    Forms\Components\FileUpload::make('thumbnail')
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

                    Forms\Components\Toggle::make('is_visible')
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
                Forms\Components\Section::make()
                ->schema([
                    Forms\Components\Placeholder::make('created_at')
                        ->label('Created at')
                        ->content(fn (Category $record): ?string => $record->created_at?->diffForHumans()),

                    Forms\Components\Placeholder::make('updated_at')
                        ->label('Last modified at')
                        ->content(fn (Category $record): ?string => $record->updated_at?->diffForHumans()),
                ])
                ->columnSpan(['lg' => 1])
                ->hidden(fn (?Category $record) => $record === null)
            ])
            ->columns(3);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('thumbnail')
                    ->label('Thumbnail')
                    ->square(),

                Tables\Columns\TextColumn::make('name')
                    ->label('Name')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('slug')
                    ->label('Slug')
                    ->searchable(),
                
                Tables\Columns\TextColumn::make('is_visible')
                    ->label('Visibility')
                    ->badge()
                    ->color(fn (bool $state): string => $state ? 'success' : 'danger')
                    ->formatStateUsing(fn (bool $state): string => $state ? '• Visible •' : '• Invisible •')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('published_at')
                    ->date()
                    ->searchable()
                    ->sortable()
                    ->toggleable(),

                Tables\Columns\TextColumn::make('deleted_at')
                    ->date()
                    ->searchable()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->emptyStateIcon('heroicon-o-tag')
            ->emptyStateHeading('No categories yet')
            ->emptyStateDescription('Once you write your category, it will appear here.')
            ->emptyStateActions([
                Tables\Actions\Action::make('create')
                    ->icon('heroicon-m-plus')
                    ->label('Create category')
                    ->url(route('filament.admin.resources.shop.categories.create'))
                    ->button(),
            ])
            ->filters([
                Tables\Filters\TrashedFilter::make(),
            ])
            ->actions([
                Tables\Actions\ActionGroup::make([
                    Tables\Actions\ViewAction::make()
                        ->modalHeading(fn ($record) => 'View Category: ' . $record->name),
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
            ProductsRelationManager::class
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
            'index' => Pages\ListCategories::route('/'),
            'create' => Pages\CreateCategory::route('/create'),
            'edit' => Pages\EditCategory::route('/{record}/edit'),
        ];
    }
}
