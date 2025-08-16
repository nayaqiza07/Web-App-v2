<?php

namespace App\Repositories\Faq;

use LaravelEasyRepository\Implementations\Eloquent;
use App\Models\Faq;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Cache;

class FaqRepositoryImplement extends Eloquent implements FaqRepository{

    /**
    * Model class to be used in this repository for the common methods inside Eloquent
    * Don't remove or change $this->model variable name
    * @property Model|mixed $model;
    */
    protected Faq $model;

    public function __construct(Faq $model)
    {
        $this->model = $model;
    }

    public function getAllData(): Collection
    {
        return Cache::remember('faqs.list', 3600, function () {
            return Faq::filter()->get();
        });
    }
}
