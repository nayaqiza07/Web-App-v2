<?php

use App\Models\User;

describe('Category Permission = view_any_category', function () {
    test('user with view_any_category permission can access category list', function () {
        $user = userWithPermission('view_any_category');

        $this->actingAs($user);

        $response = $this->get('/admin/shop/categories');
        $response->assertOk();
    });

    test('user without view_any_category permission cannot access category list', function () {
        $user = User::factory()->create();

        $this->actingAs($user);

        $response = $this->get('/admin/shop/categories');
        $response->assertForbidden();
    });
});
