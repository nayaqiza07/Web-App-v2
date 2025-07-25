<?php

use App\Models\User;
use Spatie\Permission\Models\Role;

test('registration screen can be rendered', function () {
    $response = $this->get('/register');

    $response->assertStatus(200);
});

test('new users can register', function () {
    Role::firstOrCreate(['name' => 'Customer']);
    Role::firstOrCreate(['name' => 'Super Admin']);
    
    $response = $this->post('/register', [
        'name' => 'Test User',
        'email' => 'test@example.com',
        'phone' => '08123456789',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    $user = User::where('email', 'test@example.com')->first();
    $this->assertTrue($user->hasRole('Customer'));

    $this->assertAuthenticated();
    $response->assertRedirect(route('dashboard', absolute: false));
});