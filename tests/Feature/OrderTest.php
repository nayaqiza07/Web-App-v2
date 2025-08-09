<?php

use App\Models\User;

test('guests are redirected to the login page', function () {
    $this->get('/order')->assertRedirect('/login');
});

test('authenticated user can visit the order', function () {
    $this->actingAs(User::factory()->create());

    $this->get('/order')->assertOk();
});

// test('authenticated user cannot view the order of another user', function () {

// });
