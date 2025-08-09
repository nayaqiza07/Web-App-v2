<?php

use App\Models\User;

test('guest can visit product page', function () {
    $this->get('/products')->assertOk();
});

test('authenticated user can visit product page', function () {
    $user = User::factory()->create();
    $this->actingAs($user)->get('/products')->assertOk();
});
