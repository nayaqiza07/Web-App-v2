<?php

namespace App\Filament\Resources\CategoryResource\RelationManagers;

use Filament\Schemas\Schema;
use App\Filament\Resources\ProductResource;
use App\Filament\Resources\ProductResource\Infolist\ProductsInfolist;
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

    public function infolist(Schema $schema): Schema
    {
        return ProductResource::infolist($schema);
    }

    public function table(Table $table): Table
    {
        return ProductResource::table($table)
            ->heading(fn () => 'Products from: ' . $this->ownerRecord->name);
    }
}
