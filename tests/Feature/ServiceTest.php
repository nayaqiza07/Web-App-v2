<?php

use App\Models\User;

describe('Visit The Service Page', function () {
    test('guest can visit services page', function () {
        $response = $this->get('/services');
    
        $response->assertOk();
    });
    
    test('authenticated users can visit services page', function () {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->get('/services');
    
        $response->assertOk();
    });
});
