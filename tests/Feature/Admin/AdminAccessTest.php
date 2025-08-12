<?php

use App\Models\User;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

beforeEach(function () {
    Role::firstOrCreate(['name' => 'Super Admin']);
    Role::firstOrCreate(['name' => 'Admin']);
    Role::firstOrCreate(['name' => 'Customer']);
});

describe('Admin Access', function () {
    test('admin can access the admin panel', function () {
        $superAdmin = User::factory()->create();
        $superAdmin->assignRole('Super Admin');
    
        $this->actingAs($superAdmin);
    
        $response = $this->get('/admin');
        $response->assertStatus(200);
    });

    test('non-admin cannot access the admin panel', function () {
        $customer = User::factory()->create();
        $customer->assignRole('Customer');
    
        $this->actingAs($customer);
    
        $response = $this->get('/admin');
        $response->assertForbidden();
    });
});

// Function for all resource
function userWithPermission(string $permission):User {
    $role = Role::firstOrCreate(['name' => 'Super Admin']);
    $perm = Permission::firstOrCreate(['name' => $permission]);
    
    if (!$role->hasPermissionTo($permission)) {
        $role->givePermissionTo($perm);
    }

    $user = User::factory()->create();
    $user->assignRole($role);

    return $user;
}
