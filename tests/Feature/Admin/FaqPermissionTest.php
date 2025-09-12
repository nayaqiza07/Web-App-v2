<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

uses(RefreshDatabase::class);

describe('Faq Permission = ViewAny:Faq', function () {
    test('user with ViewAny:Faq permission can access faq list', function () {
        $user = userWithPermission('ViewAny:Faq');

        $this->actingAs($user);

        $response = $this->get('/admin/content/faqs');
        $response->assertOk();
    });

    test('user without ViewAny:Faq permission cannot access faq list', function () {
        $user = User::factory()->create();

        $this->actingAs($user);

        $response = $this->get('/admin/content/faqs');
        $response->assertForbidden();
    });
});

// describe('Faq Permission = create_faq', function () {
//     test('user with create_faq permission can access faq create page', function () {
//         $user = userWithPermission('create_faq');
//         $this->actingAs($user);

//         $response = $this->get(route('filament.admin.resources.content.faqs.create'));
//         $response->assertOk();
//     });

//     test('user without create_faq permission cannot access faq create page', function () {
//         $user = User::factory()->create();

//         $this->actingAs($user);

//         $response = $this->get(route('filament.admin.resources.content.faqs.create'));
//         $response->assertForbidden();
//     });
// });