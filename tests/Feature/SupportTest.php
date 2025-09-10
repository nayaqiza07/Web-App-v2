<?php

use App\Models\User;

describe('Visit The Support Page', function () {
    test('guest can visit the support page', function () {
        $response = $this->get(route('support.index'));
        $response->assertOk();
    });
    
    test('authenticated users can visit the support page', function () {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->get(route('support.index'));
        $response->assertOk();
    });
});