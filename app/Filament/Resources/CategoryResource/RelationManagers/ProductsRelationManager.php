<?php

namespace App\Filament\Resources\CategoryResource\RelationManagers;

use Filament\Schemas\Schema;
use App\Filament\Resources\ProductResource;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables\Table;

class ProductsRelationManager extends RelationManager
{
    protected static string $relationship = 'products';

    protected static ?string $recordTitleAttribute = 'name';

    public function form(Schema $schema): Schema
    {
        return ProductResource::form($schema);
    }

    public function table(Table $table): Table
    {
        return ProductResource::table($table);
    }
}
