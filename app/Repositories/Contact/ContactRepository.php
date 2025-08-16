<?php

namespace App\Repositories\Contact;

use Illuminate\Database\Eloquent\Collection;
use LaravelEasyRepository\Repository;

interface ContactRepository extends Repository{
    public function getAllData(): Collection;
}
