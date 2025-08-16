<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Faq;
use App\Services\Contact\ContactService;
use App\Services\Faq\FaqService;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class FaqController extends Controller
{
    protected FaqService $faqService;
    protected ContactService $contactService;

    public function __construct(FaqService $faqService, ContactService $contactService)
    {
        $this->faqService = $faqService;
        $this->contactService = $contactService;
    }

    public function index(): Response
    {
        $faqs = $this->faqService->getAllFaq();
        return Inertia::render('static/Support', [
            'FAQS' => Inertia::defer(fn () => $faqs),
        ]);
    }

    public function indexOnContactUs(): Response
    {
        $faqs = $this->faqService->getAllFaq();
        $contacts = $this->contactService->getAllContacts();
        return Inertia::render('static/ContactUs', [
            'FAQS' => Inertia::defer(fn () => $faqs),
            'CONTACTS' => Inertia::defer(fn () => $contacts),
        ]);
    }
}
