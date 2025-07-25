<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Filament\Resources\UserResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\CreateRecord;

class CreateUser extends CreateRecord
{
    protected static string $resource = UserResource::class;

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

    public function getCreatedNotifcation(): ?Notification
    {
        return Notification::make()
            ->success()
            ->title('User Created')
            ->body('The user has been created successfully.');
    }
}
