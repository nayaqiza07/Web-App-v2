<?php

namespace App\Repositories\Address;

use App\Http\Requests\Settings\Address\CreateAddressRequest;
use App\Http\Requests\Settings\Address\SetDefaultAddressRequest;
use App\Http\Requests\Settings\Address\UpdateAddressRequest;
use LaravelEasyRepository\Implementations\Eloquent;
use App\Models\Address;
use Illuminate\Database\Eloquent\Collection;

class AddressRepositoryImplement extends Eloquent implements AddressRepository{
    protected Address $model;

    public function __construct(Address $model)
    {
        $this->model = $model;
    }

    public function getAddress(): Collection
    {
        $address = $this->model->filter()->get();
        return $address;
    }

    public function createAddress(CreateAddressRequest $data): Address
    {
        $address = $this->model->create([
                        ...$data->validated(),
                        'user_id' => $data->user()->id,
                    ]);
        return $address;
    }

    public function setDefaultAddress(SetDefaultAddressRequest $data, Address $address): Address
    {
        $address->update($data->validated());
        return $address;
    }

    public function updateAddress(UpdateAddressRequest $data, Address $address): Address
    {
        $address->update($data->validated());
        return $address;
    }

    public function deleteAddress(Address $address): ?bool
    {
        return $address->delete();
    }
}
