<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\Address\CreateAddressRequest;
use App\Http\Requests\Settings\Address\DeleteAddressRequest;
use App\Http\Requests\Settings\Address\SetDefaultAddressRequest;
use App\Http\Requests\Settings\Address\UpdateAddressRequest;
use App\Models\Address;
use App\Repositories\Address\AddressRepository;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class AddressController extends Controller
{
    protected AddressRepository $addressRepository;

    public function __construct(AddressRepository $addressRepository)
    {
        $this->addressRepository = $addressRepository;
    }

    public function index(): Response
    {
        $address = $this->addressRepository->getAddress();
        return Inertia::render('settings/address', [
            'ADDRESS' => $address,
        ]);
    }

    public function store(CreateAddressRequest $request): RedirectResponse
    {
        try {
            $this->addressRepository->createAddress($request);
            return back()->with('success', 'The address has been created successfully.');
        } catch (\Exception $e) {
            return back()->with('error', 'Failed to create the address. Please try again. ' . $e->getMessage());
        }
    }

    public function setDefault(SetDefaultAddressRequest $request, Address $address): RedirectResponse
    {
        try {
            $this->addressRepository->setDefaultAddress($request, $address);
            return back()->with('info', 'Address has been set as default.');
        } catch (\Exception $e) {
            return back()->with('error', 'Failed to set the address as default. Please try again. ' . $e->getMessage());
        }
    }

    public function update(UpdateAddressRequest $request, Address $address): RedirectResponse
    {
        try {
            $this->addressRepository->updateAddress($request, $address);
            return back()->with('info', 'The address has been updated successfully');
        } catch (\Exception $e) {
            return back()->with('error', 'Failed to update the address. Please try again.');
        }
    }

    public function destroy(DeleteAddressRequest $request, Address $address): RedirectResponse
    {
        try {
            $this->addressRepository->deleteAddress($address);
            return back()->with('success', 'The address has been deleted successfully.');
        } catch (\Exception $e) {
            return back()->with('error', 'Failed to delete the address. Please try again. ' . $e->getMessage());
        }
    }
}
