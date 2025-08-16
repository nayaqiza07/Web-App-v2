<?php

namespace App\Services\Faq;

use App\Repositories\Faq\FaqRepository;
use Illuminate\Database\Eloquent\Collection;
use LaravelEasyRepository\Service;

class FaqServiceImplement extends Service implements FaqService{

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
     protected FaqRepository $mainRepository;

    public function __construct(FaqRepository $mainRepository)
    {
      $this->mainRepository = $mainRepository;
    }

    public function getAllFaq(): Collection
    {
      return $this->mainRepository->getAllData();
    }
}
