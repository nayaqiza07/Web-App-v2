<?php

namespace App\Repositories\Review;

use LaravelEasyRepository\Implementations\Eloquent;
use App\Models\Review;

class ReviewRepositoryImplement extends Eloquent implements ReviewRepository{

    /**
    * Model class to be used in this repository for the common methods inside Eloquent
    * Don't remove or change $this->model variable name
    * @property Model|mixed $model;
    */
    protected Review $model;

    public function __construct(Review $model)
    {
        $this->model = $model;
    }

    // Write something awesome :)
}
