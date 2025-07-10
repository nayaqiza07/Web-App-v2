<?php

namespace App\Filament\Resources\BlogResource\Pages;

use App\Filament\Resources\BlogResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\CreateRecord;

class CreateBlog extends CreateRecord
{
    protected static string $resource = BlogResource::class;

    public function getCreatedNotification(): ?Notification
    {
        return Notification::make()
            ->success()
            ->title('Blog Created')
            ->body('The blog has been created successfully.');
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
