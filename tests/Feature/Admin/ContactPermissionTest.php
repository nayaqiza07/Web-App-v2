<?php

use App\Models\User;

describe('Contact Permission = ViewAny:Contact', function () {
    test('user with ViewAny:Contact permission can access contact list', function () {
        $user = userWithPermission('ViewAny:Contact');

        $this->actingAs($user);

        $response = $this->get('/admin/content/contacts');
        $response->assertOk();
    });

    test('user without ViewAny:Contact permission cannot access contact list', function () {
        $user = User::factory()->create();

        $this->actingAs($user);

        $response = $this->get('/admin/content/contacts');
        $response->assertForbidden();
    });
});