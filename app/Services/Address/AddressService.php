<?php

namespace App\Services\Address;

use App\Http\Requests\Settings\Address\CreateAddressRequest;
use App\Http\Requests\Settings\Address\SetDefaultAddressRequest;
use App\Http\Requests\Settings\Address\UpdateAddressRequest;
use App\Models\Address;
use Illuminate\Database\Eloquent\Collection;
use LaravelEasyRepository\BaseService;

interface AddressService extends BaseService{
    public function getAllAddresses(): Collection;
    public function createAddress(CreateAddressRequest $data): Address;
    public function setDefaultAddress(SetDefaultAddressRequest $data, Address $address): Address;
    public function updateAddress(UpdateAddressRequest $data, Address $address): Address;
    public function deleteAddress(Address $address): ?bool;
}
