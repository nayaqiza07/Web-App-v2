<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Faq;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class FaqController extends Controller
{
    /**
     * Display the list of visible faq
     * 
     * @return \Inertia\Response
     */
    public function index(): Response
    {
        $faqs = Cache::remember('faqs.list', 3600, function () {
            return Faq::filter()->get();
        });

        return Inertia::render('static/Support', [
            'FAQS' => Inertia::defer(fn () => $faqs),
        ]);
    }

    /**
     * Display the list of visible faq on Contact Us Page
     * 
     * @return \Inertia\Response
     */
    public function indexOnContactUs(): Response
    {
        $faqs = Cache::remember('faqs.list', 3600, function () {
            return Faq::filter()->get();
        });

        $contacts = Cache::remember('contacts.list', 3600, function () {
            return Contact::all();
        });

        return Inertia::render('static/ContactUs', [
            'FAQS' => Inertia::defer(fn () => $faqs),
            'CONTACTS' => Inertia::defer(fn () => $contacts),
        ]);
    }
}
