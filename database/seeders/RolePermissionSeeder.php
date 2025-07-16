<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolePermissionSeeder extends Seeder
{
    public function run()
    {
        // Clear cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Define permissions
        // Permission::create(['name' => 'view_filament']);
        // Permission::create(['name' => 'create posts']);
        // Permission::create(['name' => 'edit posts']);
        // Permission::create(['name' => 'delete posts']);

        // Create roles
        $superAdmin = Role::create(['name' => 'Super Admin']);
        $customer = Role::create(['name' => 'Customer']);

        // Assign permissions to roles
        // $superAdmin->givePermissionTo(Permission::all());
        // $editor->givePermissionTo(['view posts', 'create posts', 'edit posts']);
        // $viewer->givePermissionTo(['view posts']);
    }
}