<?php

namespace App\Services\Review;

use LaravelEasyRepository\ServiceApi;
use App\Repositories\Review\ReviewRepository;

class ReviewServiceImplement extends ServiceApi implements ReviewService{

    /**
     * set title message api for CRUD
     * @param string $title
     */
     protected string $title = "";
     /**
     * uncomment this to override the default message
     * protected string $create_message = "";
     * protected string $update_message = "";
     * protected string $delete_message = "";
     */

     /**
     * don't change $this->mainRepository variable name
     * because used in extends service class
     */
     protected ReviewRepository $mainRepository;

    public function __construct(ReviewRepository $mainRepository)
    {
      $this->mainRepository = $mainRepository;
    }

    // Define your custom methods :)
}
