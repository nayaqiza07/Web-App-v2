<?php

namespace App\Filament\Resources\FaqResource\Pages;

use Filament\Actions\CreateAction;
use Filament\Schemas\Components\Tabs\Tab;
use App\Filament\Resources\FaqResource;
use App\Models\Faq;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Database\Eloquent\Builder;

class ListFaqs extends ListRecords
{
    protected static string $resource = FaqResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }

    public function getTabs(): array
    {
        return [
            'All' => Tab::make(),

            'Visible' => Tab::make()
                ->modifyQueryUsing(fn (Builder $query) => $query->where('is_visible', true))
                ->badge(Faq::query()->where('is_visible', true)->count())
                ->badgeColor('success'),

            'Invisible' => Tab::make()
                ->modifyQueryUsing(fn (Builder $query) => $query->where('is_visible', false))
                ->badge(Faq::query()->where('is_visible', false)->count())
                ->badgeColor('danger'),
        ];
    }
}
