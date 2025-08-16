<?php

namespace App\Services\Address;

use App\Http\Requests\Settings\Address\CreateAddressRequest;
use App\Http\Requests\Settings\Address\SetDefaultAddressRequest;
use App\Http\Requests\Settings\Address\UpdateAddressRequest;
use App\Models\Address;
use LaravelEasyRepository\ServiceApi;
use App\Repositories\Address\AddressRepository;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Auth;

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

    public function getAllAddresses(): Collection
    {
      return $this->mainRepository->getAllData();
    }

    public function createAddress(CreateAddressRequest $data): Address
    {
      return $this->mainRepository->createData($data);
    }

    public function setDefaultAddress(SetDefaultAddressRequest $data, Address $address): Address
    {
      if ($address->user_id !== Auth::id()) {
        abort(403, 'Unauthorize action.');
      }

      return $this->mainRepository->setDefaultData($data, $address);
    }

    public function updateAddress(UpdateAddressRequest $data, Address $address): Address
    {
      if ($address->user_id !== Auth::id()) {
        abort(403, 'Unauthorize action.');
      }

      return $this->mainRepository->updateData($data, $address);
    }

    public function deleteAddress(Address $address): ?bool
    {
      if ($address->user_id !== Auth::id()) {
        abort(403, 'Unauthorize action.');
      }
      
      return $this->mainRepository->deleteData($address);
    }
}
