<?php

use App\Models\User;

describe('Product Permission = view_any_product', function () {
    test('user with view_any_product permission can access product list', function () {
        $user = userWithPermission('view_any_product');

        $this->actingAs($user);

        $response = $this->get('/admin/shop/products');
        $response->assertOk();
    });

    test('user without view_any_product permission cannot access product list', function () {
        $user = User::factory()->create();

        $this->actingAs($user);

        $response = $this->get('/admin/shop/products');
        $response->assertForbidden();
    });
});

// describe('Product Permission = create_product', function () {
//     test('user with create_product permission can access product create page', function () {
//         $user = userWithPermission('create_product');

//         $this->actingAs($user);

//         $response = $this->get('/admin/shop/products/create');
//         $response->assertOk();
//     });

//     test('user without create_product permission cannot access product create page', function () {
//         $user = User::factory()->create();

//         $this->actingAs($user);

//         $response = $this->get('/admin/shop/products/create');
//         $response->assertForbidden();
//     });
// });