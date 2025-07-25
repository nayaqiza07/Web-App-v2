<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Filament\Resources\UserResource;
use App\Models\User;
use Filament\Actions;
use Filament\Resources\Components\Tab;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Database\Eloquent\Builder;

class ListUsers extends ListRecords
{
    protected static string $resource = UserResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }

    public function getTabs(): array
    {
        return [
            'All' => Tab::make()
                ->badge(
                    User::count()
                ),

            'Internal' => Tab::make()
                ->modifyQueryUsing(fn (Builder $query) =>
                    $query->whereHas('roles', fn ($q) =>
                        $q->whereIn('name', ['Super Admin', 'Admin'])
                    )
                )
                ->badge(
                    User::whereHas('roles', fn ($q) => 
                        $q->whereIn('name', ['Super Admin', 'Admin'])
                    )->count()
                )
                ->badgeColor('success'),
                
            'Customer' => Tab::make()
                ->modifyQueryUsing(fn (Builder $query) =>
                    $query->whereHas('roles', fn ($q) => $q->where('name', 'Customer')
                 ))
                ->badge(User::whereHas('roles', fn ($q) => $q->where('name', 'Customer'))->count())
                ->badgeColor('info'),
        ];
    }
}
