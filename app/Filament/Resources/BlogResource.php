<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BlogResource\Forms\BlogForm;
use App\Filament\Resources\BlogResource\Pages;
use App\Filament\Resources\BlogResource\Tables\BlogsTable;
use App\Models\Blog;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class BlogResource extends Resource
{
    protected static ?string $model = Blog::class;

    protected static ?string $slug = 'content/blogs';

    protected static ?string $recordTitleAttribute = 'title';

    protected static ?string $navigationGroup = 'Content Management';

    protected static ?string $navigationIcon = 'heroicon-o-newspaper';

    protected static ?string $activeNavigationIcon = 'heroicon-m-newspaper';

    public static function form(Form $form): Form
    {
        return BlogForm::configure($form);
    }

    public static function table(Table $table): Table
    {
        return BlogsTable::cofigure($table);
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
            'index' => Pages\ListBlogs::route('/'),
            'create' => Pages\CreateBlog::route('/create'),
            'edit' => Pages\EditBlog::route('/{record}/edit'),
        ];
    }
}
