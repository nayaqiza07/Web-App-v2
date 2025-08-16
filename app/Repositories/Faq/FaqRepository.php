<?php

namespace App\Repositories\Faq;

use Illuminate\Database\Eloquent\Collection;
use LaravelEasyRepository\Repository;

interface FaqRepository extends Repository{
    public function getAllData(): Collection;
}
