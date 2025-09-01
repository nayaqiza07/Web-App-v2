<?php

namespace App\Http\Controllers;

use App\Http\Resources\Contact\ContactListResource;
use App\Http\Resources\Faq\FaqListResource;
use App\Services\Contact\ContactService;
use App\Services\Faq\FaqService;
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
            // 'FAQS' => Inertia::defer(fn () => FaqListResource::collection($faqs)->resolve()),
            'faqs' => FaqListResource::collection($faqs)->resolve(),
        ]);
    }

    public function indexOnContactUs(): Response
    {
        $faqs = $this->faqService->getAllFaq();
        $contacts = $this->contactService->getAllContacts();
        
        return Inertia::render('static/ContactUs', [
            'faqs' => FaqListResource::collection($faqs)->resolve(),
            'contacts' => ContactListResource::collection($contacts)->resolve(),
        ]);
    }
}
