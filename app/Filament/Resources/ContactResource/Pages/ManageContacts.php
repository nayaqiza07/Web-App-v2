<?php

namespace App\Filament\Resources\ContactResource\Pages;

use Filament\Actions\CreateAction;
use App\Filament\Resources\ContactResource;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageContacts extends ManageRecords
{
    protected static string $resource = ContactResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
