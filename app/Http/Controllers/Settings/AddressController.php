<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\Address\CreateAddressRequest;
use App\Http\Requests\Settings\Address\DeleteAddressRequest;
use App\Http\Requests\Settings\Address\SetDefaultAddressRequest;
use App\Http\Requests\Settings\Address\UpdateAddressRequest;
use App\Models\Address;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class AddressController extends Controller
{
    /**
     * Display the list of user address
     */
    public function index(): Response
    {
        $address = Address::filter()->get();

        return Inertia::render('settings/address', [
            'ADDRESS' => $address,
        ]);
    }

    /**
     * Store a new address fot the authenticated user.
     * 
     * @param \App\Http\Requests\Settings\Address\CreateAddressRequest $request
     * @return Illuminate\Http\RedirectResponse
     * @throws \Exception $e
     */
    public function store(CreateAddressRequest $request): RedirectResponse
    {
        try {
            Address::create([
                ...$request->validated(),
                'user_id' => $request->user()->id,
            ]);
            return back()->with('success', 'The address has been created successfully.');
        } catch (\Exception $e) {
            return back()->with('error', 'Failed to create the address. Please try again. ' . $e->getMessage());
        }
    }

    /**
     * Set default the user's address
     *
     * @param \App\Http\Requests\Settings\Address\SetDefaultAddressRequest $request
     * @param \App\Models\Address $address
     * @return Illuminate\Http\RedirectResponse
     * @throws \Exception $e
     */
    public function setDefault(SetDefaultAddressRequest $request, Address $address): RedirectResponse
    {
        try {
            $address->update($request->validated());
            return back()->with('info', 'Address has been set as default.');
        } catch (\Exception $e) {
            return back()->with('error', 'Failed to set the address as default. Please try again. ' . $e->getMessage());
        }
    }

    /**
     * Update a specific address for the authenticated user
     *
     * @param \App\Http\Requests\Settings\Address\UpdateAddressRequest $request
     * @param \App\Models\Address $address
     * @return Illuminate\Http\RedirectResponse
     * @throws \Exception $e
     */
    public function update(UpdateAddressRequest $request, Address $address): RedirectResponse
    {
        try {
            $address->update($request->validated());
            return back()->with('info', 'The address has been updated successfully');
        } catch (\Exception $e) {
            return back()->with('error', 'Failed to update the address. Please try again. ' . $e->getMessage());
        }
    }

    /**
     * Delete a specific address for the authenticated user
     *
     * @param \App\Http\Requests\Settings\Address\DeleteAddressRequest $request
     * @param \App\Models\Address $address
     * @return Illuminate\Http\RedirectResponse
     * @throws \Exception $e
     */
    public function destroy(DeleteAddressRequest $request, Address $address): RedirectResponse
    {
        try {
            $address->delete();
            return back()->with('success', 'The address has been deleted successfully.');
        } catch (\Exception $e) {
            return back()->with('error', 'Failed to delete the address. Please try again. ' . $e->getMessage());
        }
    }
}
