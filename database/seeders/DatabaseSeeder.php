<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
         $this->call([
            RolePermissionSeeder::class,
            UserSeeder::class,
            AddressSeeder::class,
            CategorySeeder::class,
            ProductSeeder::class,
            BlogSeeder::class,
            FaqSeeder::class,
            ContactSeeder::class,
        ]);
    }
}
