<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Faq;
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
        $faqs = Faq::filter()->get();

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
        $faqs = Faq::filter()->get();
        $contacts = Contact::all();

        return Inertia::render('static/ContactUs', [
            'FAQS' => Inertia::defer(fn () => $faqs),
            'CONTACTS' => Inertia::defer(fn () => $contacts),
        ]);
    }
}
