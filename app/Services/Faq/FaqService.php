<?php

namespace App\Services\Faq;

use Illuminate\Database\Eloquent\Collection;
use LaravelEasyRepository\BaseService;

interface FaqService extends BaseService{
    public function getAllFaq(): Collection;
}
