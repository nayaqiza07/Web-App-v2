<?php

namespace App\Filament\Resources\ProductResource\Tables;

use App\Models\Product;
use Filament\Tables\Actions\Action;
use Filament\Tables\Actions\ActionGroup;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteAction;
use Filament\Tables\Actions\DeleteBulkAction;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Actions\ForceDeleteAction;
use Filament\Tables\Actions\ForceDeleteBulkAction;
use Filament\Tables\Actions\RestoreAction;
use Filament\Tables\Actions\RestoreBulkAction;
use Filament\Tables\Actions\ViewAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\TrashedFilter;
use Filament\Tables\Table;

class ProductsTable
{
    public static function configure(Table $table): Table
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
                Action::make('create')
                    ->icon('heroicon-m-plus')
                    ->label('Create product')
                    ->url(route('filament.admin.resources.shop.products.create'))
                    ->button()
            ])
            ->filters([
                TrashedFilter::make(),
            ])
            ->actions([
                ActionGroup::make([
                    ViewAction::make()
                        ->modalHeading(fn ($record) => 'View Product: ' . $record->name),
                    EditAction::make(),
                    DeleteAction::make(),
                    ForceDeleteAction::make(),
                    RestoreAction::make()
                ])
            ])
            ->recordUrl(null)
            ->bulkActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                    ForceDeleteBulkAction::make(),
                    RestoreBulkAction::make(),
                ]),
            ]);
    }
}
