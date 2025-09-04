<?php

namespace App\Filament\Resources\FaqResource\Tables;

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
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\TrashedFilter;
use Filament\Tables\Table;

class FaqsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('question')
                    ->limit(30)
                    ->searchable()
                    ->sortable()
                    ->toggleable(),

                TextColumn::make('answer')
                    ->limit(30)
                    ->toggleable(),

                TextColumn::make('is_visible')
                    ->label('Visibility')
                    ->badge()
                    ->color(fn (bool $state): string => $state ? 'success' : 'danger')
                    ->formatStateUsing(fn (bool $state): string => $state ? '• Visible •' : '• Invisible •')
                    ->searchable()
                    ->sortable()
                    ->toggleable(),

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
            ->emptyStateIcon('heroicon-o-chat-bubble-bottom-center-text')
            ->emptyStateHeading('No faqs yet')
            ->emptyStateDescription('Once you write your faq, it will appear here.')
            ->emptyStateActions([
                Action::make('create')
                    ->icon('heroicon-m-plus')
                    ->label('Create faq')
                    ->url(route('filament.admin.resources.content.faqs.create'))
                    ->button(),
            ])
            ->filters([
                TrashedFilter::make(),
            ])
            ->actions([
                ActionGroup::make([
                    ViewAction::make()
                        ->modalHeading(fn ($record) => 'View Faq: ' . $record->question),
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
