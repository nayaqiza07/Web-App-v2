<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Http\Requests\Settings\Address\DeleteAddressRequest;
use App\Http\Requests\Settings\AddressRequest;
use App\Models\Address;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class AddressController extends Controller
{
    /**
     * Display the list of visible blog posts
     * 
     * @return \Inertia\Response
     */
    public function index(): Response
    {
        $address = Address::filter()->get();

        return Inertia::render('settings/address', [
            'ADDRESS' => $address
        ]);
    }

    /**
     * Store a new address fot the authenticated user.
     * 
     * @param AddressRequest $request
     * @return Illuminate\Http\RedirectResponse
     * 
     * @throws \Throwable
     */
    public function store(AddressRequest $request): RedirectResponse
    {
        DB::beginTransaction();

        $userId = $request->user()->id;

        if ($request->boolean('is_active')) {
            Address::where('user_id', $userId)->update(['is_active' => false]);
        }

        try {
            $address = new Address();

            $address->country = $request->country;
            $address->state = $request->state;
            $address->city = $request->city;
            $address->street = $request->street;
            $address->zip = $request->zip;

            $address->is_active = $request->boolean('is_active');

            $address->user_id = $userId;

            $address->save();

            DB::commit();
            return redirect()->back()->with('success', 'Address created successfully');
        } catch (\Throwable $th) {
            DB::rollBack();

            return redirect()->back()->with('error', 'Address created Failed');
        }
    }
    
    /**
     * Set default the user's address
     * 
     * @param Request $request
     * @return Illuminate\Http\RedirectResponse
     * 
     * @throws \Throwable
     */
    public function setDefault(AddressRequest $request): RedirectResponse
    {
        // $request->validate([
        //     'id' => 'required|integer|exists:addresses,id',
        //     'is_active' => 'nullable|boolean',
        // ]);

        DB::beginTransaction();

        try {
            $userId = $request->user()->id;

            if ($request->boolean('is_active')) {
                Address::where('user_id', $userId)->update(['is_active' => false]);
            }
            
            $address = Address::where('user_id', $request->user()->id)->findOrFail($request->id);

            $address->is_active = $request->boolean('is_active');
            $address->update();

            DB::commit();

            return redirect()->back()->with('info', 'Address set as default');
        } catch (\Throwable $th) {
            DB::rollBack();

            return redirect()->back()->with('error', 'Failed to set address as default' . $th);
        }
    }

    /**
     * Update a spesific address for the authenticated user
     */

    /**
     * Delete a specific address for the authenticated user
     * 
     * @param DeleteAddressRequest $request
     * @return Illuminate\Http\RedirectResponse
     * 
     * @throws \Throwable
     */
    public function destroy(DeleteAddressRequest $request): RedirectResponse
    {
        DB::beginTransaction();

        try {
            $address = Address::where('user_id', $request->user()->id)->findOrFail($request->id);
            $address->delete();

            DB::commit();

            return redirect()->back()->with('success', 'Address deleted successfully');
        } catch (\Throwable $th) {
            DB::rollBack();

            return redirect()->back()->with('error', 'Address deleted failed');
        }
    }
}
