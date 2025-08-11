<?php

use App\Models\User;
use Filament\Panel;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

beforeEach(function () {
    Role::create(['name' => 'Super Admin']);
    Role::create(['name' => 'Admin']);
    Role::create(['name' => 'Customer']);
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
    $role = Role::create(['name' => 'Super Admin']);
    Permission::firstOrCreate(['name' => $permission]);
    $role->givePermissionTo($permission);

    $user = User::factory()->create();
    $user->assignRole($role);

    return $user;
}
