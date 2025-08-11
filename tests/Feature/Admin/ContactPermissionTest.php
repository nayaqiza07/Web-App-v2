<?php

use App\Models\User;

describe('Contact Permission = view_any_contact', function () {
    test('user with view_any_contact permission can access contact list', function () {
        $user = userWithPermission('view_any_contact');

        $this->actingAs($user);

        $response = $this->get('/admin/content/contacts');
        $response->assertOk();
    });

    test('user without view_any_contact permission cannot access contact list', function () {
        $user = User::factory()->create();

        $this->actingAs($user);

        $response = $this->get('/admin/content/contacts');
        $response->assertForbidden();
    });
});