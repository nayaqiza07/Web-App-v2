<?php

namespace App\Filament\Resources\UserResource\RelationManagers;

use App\Filament\Resources\OrderResource;
use Filament\Schemas\Schema;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class OrdersRelationManager extends RelationManager
{
    protected static string $relationship = 'orders';

    protected static ?string $recordTitleAttribute = 'order_code';

    public function form(Schema $schema): Schema
    {
        return OrderResource::form($schema);
    }

    public function infolist(Schema $schema): Schema
    {
        return OrderResource::infolist($schema);
    }

    public function table(Table $table): Table
    {
        return OrderResource::table($table)
            ->heading(fn () => 'Orders from: ' . $this->ownerRecord->name);
    }
}
