<?php

namespace App\Services\Address;

use LaravelEasyRepository\ServiceApi;
use App\Repositories\Address\AddressRepository;

class AddressServiceImplement extends ServiceApi implements AddressService{

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
     protected AddressRepository $mainRepository;

    public function __construct(AddressRepository $mainRepository)
    {
      $this->mainRepository = $mainRepository;
    }

    // Define your custom methods :)
}
