<?php

namespace App\Repositories\Address;

use App\Http\Requests\Settings\Address\CreateAddressRequest;
use App\Http\Requests\Settings\Address\SetDefaultAddressRequest;
use App\Http\Requests\Settings\Address\UpdateAddressRequest;
use App\Models\Address;
use Illuminate\Database\Eloquent\Collection;
use LaravelEasyRepository\Repository;

interface AddressRepository extends Repository {
    public function getAllData(): Collection;
    public function createData(CreateAddressRequest $data): Address;
    public function setDefaultData(SetDefaultAddressRequest $data, Address $address): Address;
    public function updateData(UpdateAddressRequest $data, Address $address): Address;
    public function deleteData(Address $address): ?bool;
}
