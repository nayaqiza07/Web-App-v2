<?php

use App\Models\Faq;
use App\Models\User;

test('guest can visit the support page', function () {
    $response = $this->get('/support');

    $response->assertOk();
});

test('authenticated users can visit the support page', function () {
    $user = User::factory()->create();
    $response = $this->actingAs($user)->get('/support');

    $response->assertOk();
});

// test('users can view dynamic faq entries page', function () {
//     // Buat satu FAQ yang visible
//     $visibleFaq = Faq::factory()->create([
//         'question' => 'How can I get support?',
//         'answer' => 'You can contact us via email or chat.',
//         'is_visible' => true,
//     ]);

//     $response = $this->get('/support');

//     $response->assertOk();
// });
