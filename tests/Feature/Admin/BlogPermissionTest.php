<?php

use App\Models\User;

describe('Blog Permission = view_any_blog', function () {
    test('user with view_any_blog permission can access blog list', function () {
        $user = userWithPermission('view_any_blog');

        $this->actingAs($user);

        $response = $this->get('/admin/content/blogs');
        $response->assertOk();
    });

    test('user without view_any_blog permission cannot access blog list', function () {
        $user = User::factory()->create();

        $this->actingAs($user);

        $response = $this->get('/admin/content/blogs');
        $response->assertForbidden();
    });
});
