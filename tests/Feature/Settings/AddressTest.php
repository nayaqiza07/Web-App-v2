<?php

use App\Models\Address;
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

test('authenticated user can create address (creating a new default address should set old default addresses to non-default)', function () {
    $user = User::factory()->create();
    $oldAddress = Address::factory()->for($user)->create([
        'is_default' => true
    ]);

    $response = $this
        ->actingAs($user)
        ->post('/settings/address', [
          'label' => 'Home',
          'recipient_name' => 'Home Owner',
          'phone_number' => $user->phone,
          'country' => 'Indonesia',
          'state' => 'Jawa Tengah',
          'city' => 'Kabupaten Jepara',
          'street' => 'Jl. Langon, Kec. Tahunan',
          'postal_code' => '59878',
          'is_default' => true,
        ]);

    $response
        ->assertSessionHasNoErrors();

    $updatedOldAddress = $oldAddress->fresh();

    $newAddress = Address::where('user_id', $user->id)
                        ->where('label', 'Home')
                        ->where('is_default', true)
                        ->first();

    expect($updatedOldAddress->is_default)->toBe(0);
    expect($newAddress->is_default)->toBe(1);

    $this->assertDatabaseHas('addresses', [
        'user_id' => $user->id,
        'street' => 'Jl. Langon, Kec. Tahunan',
        'postal_code' => '59878',
        'is_default' => true,
    ]);
});

test('authenticated user only can set default one address', function () {
    $user = User::factory()->create();
    $address = Address::factory()->for($user)->create([
        'is_default' => true,
    ]);

    $response = $this
        ->actingAs($user)
        ->patch("/settings/address/{$address->id}", [
            'is_default' => true,
        ]);

    $response
        ->assertSessionHasNoErrors();

    $updatedAddress = $address->fresh();

    expect($updatedAddress->is_default)->toBe(1);
});

test('authenticated user can update address', function () {
    $user = User::factory()->create();
    $address = Address::factory()->for($user)->create([
        'label' => 'Old Home',
        'street' => 'Old Street',
        'is_default' => true,
    ]);

    $response = $this
        ->actingAs($user)
        ->put("/settings/address/{$address->id}", [
            'id' => $address->id,
            'label' => 'New Office',
            'recipient_name' => 'New Recipient',
            'phone_number' => '08123456789',
            'country' => 'Indonesia',
            'state' => 'Jawa Tengah',
            'city' => 'Kabupaten Jepara',
            'street' => 'Jl. Baru, Kec. Anyar',
            'postal_code' => '59878',
        ]);

    $response
        ->assertSessionHasNoErrors();
        // ->assertRedirect('/settings/address');

    $updatedAddress = $address->fresh();

    expect($updatedAddress->label)->toBe('New Office');
    expect($updatedAddress->street)->toBe('Jl. Baru, Kec. Anyar');
});

test('authenticated user can delete address', function () {
    $user = User::factory()->create();
    $address = Address::factory()->for($user)->create();

    $response = $this
        ->actingAs($user)
        ->delete("/settings/address/{$address->id}");

    $response
        ->assertSessionHasNoErrors();

    $this->assertDatabaseMissing('addresses', [
        'id' => $address->id,
        'user_id' => $user->id,
    ]);
});

test('authenticated user cannot update/delete address of another user', function () {
    $userA = User::factory()->create();
    $userB = User::factory()->create();
    $address = Address::factory()->create(['user_id' => $userB->id]);

    $this->actingAs($userA)->put("settings/address/{$address->id}")
        ->assertForbidden();

    $this->actingAs($userA)->delete("settings/address/{$address->id}")
        ->assertForbidden();
});