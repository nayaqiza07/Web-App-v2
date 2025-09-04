<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ContactResource\Forms\ContactForm;
use App\Filament\Resources\ContactResource\Pages;
use App\Filament\Resources\ContactResource\Tables\ContactsTable;
use App\Models\Contact;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ContactResource extends Resource
{
    protected static ?string $model = Contact::class;
    
    protected static ?string $slug = 'content/contacts';

    protected static ?string $recordTitleAttribute = 'email_us';

    protected static ?string $navigationGroup = 'Content Management';

    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-left-right';

    protected static ?string $activeNavigationIcon = 'heroicon-m-chat-bubble-left-right';

    public static function form(Form $form): Form
    {
        return ContactForm::configure($form);
    }

    public static function table(Table $table): Table
    {
        return ContactsTable::configure($table);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageContacts::route('/'),
        ];
    }
}
