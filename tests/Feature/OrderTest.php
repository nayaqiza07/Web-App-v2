<?php

use App\Models\User;

describe('Visit The Order Page', function () {
    test('guests are redirected to the login page', function () {
        // $this->assertGuest();
        $this->get(route('order.index'))->assertRedirect('/login');
    });
    
    test('authenticated user can visit the order', function () {
        $this->actingAs(User::factory()->create());
        $this->get(route('order.index'))->assertOk();
    });
});

// test('authenticated user cannot view the order of another user', function () {

// });
