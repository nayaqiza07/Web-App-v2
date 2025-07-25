<?php

use App\Models\User;

test('unauthenticated user is redirected from address page', function () {
    $response = $this->get('/settings/address');

    $response->assertRedirect('/login');
});

test('authenticated user can access address page', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get('/settings/address');

    $response->assertOk();
});

test('authenticated user can create address', function () {
    $user = User::factory()->create();

    $response = $this
        ->actingAs($user)
        ->post('/settings/address', [
          'country' => '102',
          'state' => '1802',
          'city' => '56433',
          'street' => 'Jl. Langon',
          'zip' => '59878',
          'is_active' => true,
        ]);

    $response
        ->assertSessionHasNoErrors();
        // ->assertRedirect('/settings/address');

    $this->assertDatabaseHas('addresses', [
        'user_id' => $user->id,
        'street' => 'Jl. Langon',
        'zip' => '59878',
    ]);
});