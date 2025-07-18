<?php

namespace App\Filament\Resources\CategoryResource\Pages;

use App\Filament\Resources\CategoryResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\CreateRecord;

class CreateCategory extends CreateRecord
{
    protected static string $resource = CategoryResource::class;

    protected function getCreatedNotification(): ?Notification
    {
        return Notification::make()
            ->success()
            ->title('Category Created')
            ->body('The category has been created successfully.');
    }

    protected function getHeaderActions(): array
    {
        return [
            $this->getCancelFormAction()
            ->formId('form'),

            $this->getCreateAnotherFormAction()
            ->formId('form'),
            
            $this->getCreateFormAction()
            ->formId('form'),
        ];
    }
}
