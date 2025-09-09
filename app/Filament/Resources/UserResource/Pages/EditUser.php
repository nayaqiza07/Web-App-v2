<?php

namespace App\Filament\Resources\UserResource\Pages;

use Filament\Actions\DeleteAction;
use App\Filament\Resources\UserResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\EditRecord;

class EditUser extends EditRecord
{
    protected static string $resource = UserResource::class;

    public function getSavedNotification(): ?Notification
    {
        return Notification::make()
            ->info()
            ->title('User Updated')
            ->body('The user has been updated successfully');
    }

    protected function getHeaderActions(): array
    {
        return [
            $this->getCancelFormAction()
            ->formId('form'),

            $this->getSaveFormAction()
            ->formId('form'),

            DeleteAction::make(),
        ];
    }
}
