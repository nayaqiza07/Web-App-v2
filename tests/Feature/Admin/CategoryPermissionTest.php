<?php

use App\Models\User;

describe('Category Permission = ViewAny:Category', function () {
    test('user with ViewAny:Category permission can access category list', function () {
        $user = userWithPermission('ViewAny:Category');

        $this->actingAs($user);

        $response = $this->get('/admin/shop/categories');
        $response->assertOk();
    });

    test('user without ViewAny:Category permission cannot access category list', function () {
        $user = User::factory()->create();

        $this->actingAs($user);

        $response = $this->get('/admin/shop/categories');
        $response->assertForbidden();
    });
});
