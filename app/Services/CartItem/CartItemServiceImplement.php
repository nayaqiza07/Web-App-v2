<?php

namespace App\Services\CartItem;

use App\Http\Requests\Cart\StoreCartItemRequest;
use App\Http\Requests\Cart\UpdateCartItemRequest;
use App\Models\CartItem;
use App\Repositories\CartItem\CartItemRepository;
use Illuminate\Support\Facades\Auth;
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

    public function getAllCartItems(): array
    {
        if (!Auth::check()) {
            return [
                'items' => collect(),
                'total_items' => 0
            ];
        }
        
        return $this->mainRepository->getAllData();
    }

    public function createCartItem(StoreCartItemRequest $data): CartItem
    {
        return $this->mainRepository->createData($data);
    }

    public function updateCartItem(UpdateCartItemRequest $data, CartItem $cartItem): CartItem
    {
        if ($cartItem->user_id !== Auth::id()) {
            abort(403, 'Unauthorized action.');
        }
        
        return $this->mainRepository->updateData($data, $cartItem);
    }

    public function deleteCartItem(CartItem $cartItem): ?bool
    {
        if ($cartItem->user_id !== Auth::id()) {
            abort(403, 'Unauthorized action.');
        }

        return $this->mainRepository->deleteData($cartItem);
    }

    public function clearCartItem(): int
    {
        if (!Auth::check()) {
            return 0;
        }
        
        return $this->mainRepository->clearData();
    }
}
