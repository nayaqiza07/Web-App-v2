<?php

use App\Models\User;

test('registration screen can be rendered', function () {
    $response = $this->get('/register');

    $response->assertStatus(200);
});

test('new users can register', function () {
    $response = $this->post('/register', [
        'name' => 'Test User',
        'email' => 'test@example.com',
        'phone' => '08123456789',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

     $user = User::where('email', 'test@example.com')->first();
     $user->assignRole('Customer');

    $this->assertAuthenticated();
    $response->assertRedirect(route('dashboard', absolute: false));
});