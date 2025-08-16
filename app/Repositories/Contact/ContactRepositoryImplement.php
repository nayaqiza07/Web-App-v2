<?php

namespace App\Repositories\Contact;

use LaravelEasyRepository\Implementations\Eloquent;
use App\Models\Contact;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Cache;

class ContactRepositoryImplement extends Eloquent implements ContactRepository{

    /**
    * Model class to be used in this repository for the common methods inside Eloquent
    * Don't remove or change $this->model variable name
    * @property Model|mixed $model;
    */
    protected Contact $model;

    public function __construct(Contact $model)
    {
        $this->model = $model;
    }

    public function getAllData(): Collection
    {
        return Cache::remember('contacts.list', 3600, function () {
            return Contact::all();
        });
    }
}
