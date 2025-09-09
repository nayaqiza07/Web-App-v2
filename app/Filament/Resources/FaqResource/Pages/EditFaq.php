<?php

namespace App\Filament\Resources\FaqResource\Pages;

use Filament\Actions\DeleteAction;
use Filament\Actions\ForceDeleteAction;
use Filament\Actions\RestoreAction;
use App\Filament\Resources\FaqResource;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\EditRecord;

class EditFaq extends EditRecord
{
    protected static string $resource = FaqResource::class;

    public function getSavedNotification(): ?Notification
    {
        return Notification::make()
            ->success()
            ->title('Faq Updated')
            ->Body('The faq has been updated successfully');
    }

    protected function getHeaderActions(): array
    {
        return [
            $this->getCancelFormAction()
            ->formId('form'),

            $this->getSaveFormAction()
            ->formId('form'),

            DeleteAction::make(),
            ForceDeleteAction::make(),
            RestoreAction::make(),
        ];
    }
}
