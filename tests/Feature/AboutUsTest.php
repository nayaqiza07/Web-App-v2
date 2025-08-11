<?php

use App\Models\User;

describe('Visit The About Us Page', function () {
    test('guest can view about us page', function () {
        $response = $this->get('/about-us');
        $response->assertOk();
    });
    
    test('authenticated users can view about us page', function () {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->get('/about-us');
        $response->assertOk();
    });
});