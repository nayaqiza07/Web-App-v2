<?php

use App\Models\User;

test('guest can visit homepage', function () {
    $this->get('/')->assertOk();
});

test('authenticated user can visit homepage', function () {
    $this->actingAs(User::factory()->create());

    $this->get('/')->assertOk();
});
