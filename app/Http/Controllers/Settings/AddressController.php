<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\Address\CreateAddressRequest;
use App\Http\Requests\Settings\Address\DeleteAddressRequest;
use App\Http\Requests\Settings\Address\SetDefaultAddressRequest;
use App\Http\Requests\Settings\Address\UpdateAddressRequest;
use App\Models\Address;
use App\Services\Address\AddressService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class AddressController extends Controller
{
    protected AddressService $addressService;

    public function __construct(AddressService $addressService)
    {
        $this->addressService = $addressService;
    }

    public function index(): Response
    {
        $address = $this->addressService->getAllAddresses();
        return Inertia::render('settings/address', [
            'ADDRESS' => $address,
        ]);
    }

    public function store(CreateAddressRequest $request): RedirectResponse
    {
        try {
            $this->addressService->createAddress($request);
            return back()->with('success', 'The address has been created successfully.');
        } catch (\Exception $e) {
            Log::error("Address failed to create", [
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
            ]);
            return back()->with('error', 'Failed to create the address. Please try again. ' . $e->getMessage());
        }
    }

    public function setDefault(SetDefaultAddressRequest $request, Address $address): RedirectResponse
    {
        try {
            $this->addressService->setDefaultAddress($request, $address);
            return back()->with('info', 'Address has been set as default.');
        } catch (\Exception $e) {
            Log::error("Address failed to set default", [
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
            ]);
            return back()->with('error', 'Failed to set the address as default. Please try again. ' . $e->getMessage());
        }
    }

    public function update(UpdateAddressRequest $request, Address $address): RedirectResponse
    {
        try {
            $this->addressService->updateAddress($request, $address);
            return back()->with('info', 'The address has been updated successfully');
        } catch (\Exception $e) {
            Log::error("Address failed to update", [
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
            ]);
            return back()->with('error', 'Failed to update the address. Please try again.');
        }
    }

    public function destroy(DeleteAddressRequest $request, Address $address): RedirectResponse
    {
        try {
            $this->addressService->deleteAddress($address);
            return back()->with('success', 'The address has been deleted successfully.');
        } catch (\Exception $e) {
            Log::error("Address failed to delete", [
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
            ]);
            return back()->with('error', 'Failed to delete the address. Please try again.');
        }
    }
}
