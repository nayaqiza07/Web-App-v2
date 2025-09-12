<?php

namespace App\Filament\Resources\ProductResource\RelationManagers;

// use App\Filament\Resources\ProductResource;
// use Filament\Actions\ActionGroup;
// use Filament\Actions\BulkActionGroup;
// use Filament\Actions\CreateAction;
// use Filament\Actions\DeleteAction;
// use Filament\Actions\DeleteBulkAction;
// use Filament\Actions\EditAction;
// use Filament\Actions\ViewAction;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables\Columns\ColumnGroup;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Grouping\Group;
use Filament\Tables\Table;
use Illuminate\Support\Str;

class ReviewsRelationManager extends RelationManager
{
    protected static string $relationship = 'reviews';

    protected static ?string $recordTitleAttribute = 'title';

    public function table(Table $table): Table
    {
        return $table
            ->columns([
                ColumnGroup::make('Details')
                    ->columns([
                        TextColumn::make('title'),
                        TextColumn::make('user.name')
                            ->searchable()
                    ]),

                ColumnGroup::make('Context')
                    ->columns([
                        TextColumn::make('is_visible'),
                        TextColumn::make('content')
                    ]),
            ])
            ->heading(fn () => 'Reviews for: ' . Str::limit($this->ownerRecord->name, 40))
            ->emptyStateIcon('heroicon-m-chat-bubble-oval-left')
            ->emptyStateHeading('No reviews yet')
            ->emptyStateDescription('Once customer write a review, it will appear here.')
            ->headerActions([
                // CreateAction::make(),
            ])
            // ->recordActions([
            //     ActionGroup::make([
            //         ViewAction::make()
            //             ->modalHeading(fn ($record) => 'View Order: ' . $record->order_code),
            //         EditAction::make(),
            //         DeleteAction::make(),
            //     ])
            // ])
            // ->groupedBulkActions([
            //     BulkActionGroup::make([
            //         DeleteBulkAction::make(),
            //     ]),
            // ])
            ->groups([
                Group::make('is_visible')
                    ->label('Public Visibility')
                    ->date()
                    ->collapsible(),
            ]);
    }
}
