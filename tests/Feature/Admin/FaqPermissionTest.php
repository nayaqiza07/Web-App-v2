<?php

use App\Models\User;

describe('Faq Permission = view_any_faq', function () {
    test('user with view_any_faq permission can access faq list', function () {
        $user = userWithPermission('view_any_faq');

        $this->actingAs($user);

        $response = $this->get('/admin/content/faqs');
        $response->assertOk();
    });

    test('user without view_any_faq permission cannot access faq list', function () {
        $user = User::factory()->create();

        $this->actingAs($user);

        $response = $this->get('/admin/content/faqs');
        $response->assertForbidden();
    });
});