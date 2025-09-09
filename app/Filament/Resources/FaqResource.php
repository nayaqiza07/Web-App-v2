<?php

namespace App\Filament\Resources;

use Filament\Schemas\Schema;
use App\Filament\Resources\FaqResource\Pages\ListFaqs;
use App\Filament\Resources\FaqResource\Pages\CreateFaq;
use App\Filament\Resources\FaqResource\Pages\EditFaq;
use App\Filament\Resources\FaqResource\Forms\FaqForm;
use App\Filament\Resources\FaqResource\Infolist\FaqsInfolist;
use App\Filament\Resources\FaqResource\Tables\FaqsTable;
use App\Models\Faq;
use Filament\Resources\Resource;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class FaqResource extends Resource
{
    protected static ?string $model = Faq::class;

    protected static ?string $slug = 'content/faqs';

    protected static ?string $recordTitleAttribute = 'question';

    protected static string | \UnitEnum | null $navigationGroup = 'Content Management';

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-chat-bubble-bottom-center-text';

    protected static string | \BackedEnum | null $activeNavigationIcon = 'heroicon-m-chat-bubble-bottom-center-text';

    public static function form(Schema $schema): Schema
    {
        return FaqForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return FaqsInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return FaqsTable::configure($table);
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

    public static function getPages(): array
    {
        return [
            'index' => ListFaqs::route('/'),
            'create' => CreateFaq::route('/create'),
            'edit' => EditFaq::route('/{record}/edit'),
        ];
    }
}
