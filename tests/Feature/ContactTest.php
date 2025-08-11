<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

describe('Visit The Contact Us Page Test', function() {
    test('guest can visit the contact us page', function () {
        $response = $this->get(route('contact-us.indexOnContactUs'));
        $response->assertOk();
    });
    
    test('authenticated users can visit the contact us page', function () {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->get(route('contact-us.indexOnContactUs'));
        $response->assertOk();
    });
});

// test('users can view dynamic contact entries page', function () {
//     $contact = Contact::factory()->create();

//     $response = $this->get('/contact-us');

//     $response->assertOk();
//     // $response->assertSeeText($contact->email_us);
//     // $response->assertSeeText($contact->chat_us);
//     // $response->assertSee($contact->call_us);
//     // $response->assertSee($contact->visit_us);
//     // $response->assertSee($contact->our_coordinate);
// });

// test('users can view dynamic faq entries on /contact-us page', function() {
//     $faq = Faq::factory()->create();

//     $response = $this->get('/contact-us');

//     $response->assertOk();

//     // expect($content)->toContain($faq->question);
//     // expect($content)->toContain($faq->answer);
//     // $response->assertSeeText($faq->question);
//     // $response->assertSeeText($faq->answer);
// });
