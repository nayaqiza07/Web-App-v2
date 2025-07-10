<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use Illuminate\Http\Request;
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
            'FAQS' => $faqs
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

        return Inertia::render('static/ContactUs', [
            'FAQS' => $faqs
        ]);
    }
}
