<?php

namespace App\Services\Contact;

use Illuminate\Database\Eloquent\Collection;
use LaravelEasyRepository\BaseService;

interface ContactService extends BaseService {
    public function getAllContacts(): Collection;
}
