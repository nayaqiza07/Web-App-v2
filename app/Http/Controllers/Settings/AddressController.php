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
     * @throws \Throwable
     */
    public function store(CreateAddressRequest $request): RedirectResponse
    {
        DB::beginTransaction();

        $userId = $request->user()->id;

        if ($request->boolean('is_active')) {
            Address::where('user_id', $userId)->update(['is_active' => false]);
        }

        try {
            $address = new Address;

            $address->country = $request->country;
            $address->state = $request->state;
            $address->city = $request->city;
            $address->street = $request->street;
            $address->zip = $request->zip;

            $address->is_active = $request->boolean('is_active');

            $address->user_id = $userId;

            $address->save();

            DB::commit();

            return redirect()->back()->with('success', 'The address has been created successfully.');
        } catch (\Throwable $th) {
            DB::rollBack();

            return redirect()->back()->with('error', $th->getMessage());
            // return redirect()->back()->with('error', 'Failed to create the address. Please try again.');
        }
    }

    /**
     * Set default the user's address
     *
     *
     * @throws \Throwable
     */
    public function setDefault(SetDefaultAddressRequest $request): RedirectResponse
    {
        DB::beginTransaction();

        try {
            $userId = $request->user()->id;
            $addressId = $request->validated()['id'];

            if ($request->boolean('is_active')) {
                Address::where('user_id', $userId)->update(['is_active' => false]);
            }

            $address = Address::where('user_id', $userId)
                ->where('id', $addressId)
                ->firstOrFail();

            $address->is_active = $request->boolean('is_active');
            $address->save();

            DB::commit();

            return redirect()->back()->with('info', 'Address has been set as default.');
        } catch (\Throwable $th) {
            DB::rollBack();

            // return redirect()->back()->with('error', $th->getMessage());
            return redirect()->back()->with('error', 'Failed to set the address as default. Please try again.');
        }
    }

    /**
     * Update a specific address for the authenticated user
     *
     * @param \App\Http\Requests\Settings\Address\UpdateAddressRequest $request
     * @throws \Throwable
     */
    public function update(UpdateAddressRequest $request): RedirectResponse
    {
        DB::beginTransaction();

        try {
            $userId = $request->user()->id;
            $addressId = $request->validated()['id'];

            $address = Address::where('id', $addressId)
                ->where('user_id', $userId)
                ->firstOrFail();

            $address->country = $request->country;
            $address->state = $request->state;
            $address->city = $request->city;
            $address->street = $request->street;
            $address->zip = $request->zip;

            $address->save();

            DB::commit();

            return redirect()->back()->with('info', 'The address has been updated successfully');
        } catch (\Throwable $th) {
            DB::rollBack();

            // return redirect()->back()->with('error', $th->getMessage());
            return redirect()->back()->with('error', 'Failed to update the address. Please try again.');
        }
    }

    /**
     * Delete a specific address for the authenticated user
     *
     * @param \App\Http\Requests\Settings\Address\DeleteAddressRequest $request
     * @throws \Throwable
     */
    public function destroy(DeleteAddressRequest $request): RedirectResponse
    {
        DB::beginTransaction();

        try {
            $userId = $request->user()->id;
            $addressId = $request->validated()['id'];

            $address = Address::where('user_id', $userId)
                ->where('id', $addressId)
                ->firstOrFail();

            $address->delete();

            DB::commit();

            return redirect()->back()->with('success', 'The address has been deleted successfully.');
        } catch (\Throwable $th) {
            DB::rollBack();

            // return redirect()->back()->with('error', $th->getMessage());
            return redirect()->back()->with('error', 'Failed to delete the address. Please try again.');
        }
    }
}
