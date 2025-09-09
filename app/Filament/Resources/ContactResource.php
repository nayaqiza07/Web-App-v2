<?php

namespace App\Filament\Resources;

use Filament\Schemas\Schema;
use App\Filament\Resources\ContactResource\Pages\ManageContacts;
use App\Filament\Resources\ContactResource\Forms\ContactForm;
use App\Filament\Resources\ContactResource\Pages;
use App\Filament\Resources\ContactResource\Tables\ContactsTable;
use App\Models\Contact;
use Filament\Forms;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ContactResource extends Resource
{
    protected static ?string $model = Contact::class;
    
    protected static ?string $slug = 'content/contacts';

    protected static ?string $recordTitleAttribute = 'email_us';

    protected static string | \UnitEnum | null $navigationGroup = 'Content Management';

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-chat-bubble-left-right';

    protected static string | \BackedEnum | null $activeNavigationIcon = 'heroicon-m-chat-bubble-left-right';

    public static function form(Schema $schema): Schema
    {
        return ContactForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ContactsTable::configure($table);
    }

    public static function getPages(): array
    {
        return [
            'index' => ManageContacts::route('/'),
        ];
    }
}
