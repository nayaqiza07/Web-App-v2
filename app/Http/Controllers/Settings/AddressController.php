<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Models\Address;
use Illuminate\Http\Request;
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
}
