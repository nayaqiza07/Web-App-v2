<?php

use App\Models\User;

describe('Blog Permission = ViewAny:Blog', function () {
    test('user with ViewAny:Blog permission can access blog list', function () {
        $user = userWithPermission('ViewAny:Blog');

        $this->actingAs($user);

        $response = $this->get('/admin/content/blogs');
        $response->assertOk();
    });

    test('user without ViewAny:Blog permission cannot access blog list', function () {
        $user = User::factory()->create();

        $this->actingAs($user);

        $response = $this->get('/admin/content/blogs');
        $response->assertForbidden();
    });
});
