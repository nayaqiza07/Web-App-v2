<?php

namespace App\Services\Contact;

use LaravelEasyRepository\ServiceApi;
use App\Repositories\Contact\ContactRepository;
use Illuminate\Database\Eloquent\Collection;

class ContactServiceImplement extends ServiceApi implements ContactService{

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
     protected ContactRepository $mainRepository;

    public function __construct(ContactRepository $mainRepository)
    {
      $this->mainRepository = $mainRepository;
    }

    public function getAllContacts(): Collection
    {
      return $this->mainRepository->getAllData();
    }
}
