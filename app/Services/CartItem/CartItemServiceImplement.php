<?php

namespace App\Services\CartItem;

use App\Repositories\CartItem\CartItemRepository;
use LaravelEasyRepository\Service;

class CartItemServiceImplement extends Service implements CartItemService {

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
    protected CartItemRepository $mainRepository;

    public function __construct(CartItemRepository $mainRepository)
    {
        $this->mainRepository = $mainRepository;
    }
}
