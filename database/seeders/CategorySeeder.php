<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::factory()->createMany([
            [
                'name' => 'Sofa', 
                'slug' => 'sofa', 
                'thumbnail' => 'https://images.unsplash.com/photo-1680503397654-cd18497b1b41?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                'name' => 'Table', 
                'slug' => 'table', 
                'thumbnail' => 'https://images.unsplash.com/photo-1740402065437-4edddd2932bc?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                'name' => 'Chair', 
                'slug' => 'chair',
                'thumbnail' => 'https://plus.unsplash.com/premium_photo-1705479742912-79af0f068803?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                'name' => 'Terrace Set', 
                'slug' => 'terrace-set',
                'thumbnail' => 'https://images.unsplash.com/photo-1739397089006-727cc5e98565?q=80&w=835&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                'name' => 'Storage', 
                'slug' => 'storage',
                'thumbnail' => 'https://images.unsplash.com/photo-1640357154220-9775b0f31dec?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                'name' => 'TV Consoles', 
                'slug' => 'tv-consoles',
                'thumbnail' => 'https://plus.unsplash.com/premium_photo-1744390859924-8fe77599ae0b?q=80&w=828&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                'name' => 'Sun Lounger', 
                'slug' => 'sun-lounger',
                'thumbnail' => 'https://plus.unsplash.com/premium_photo-1723823036117-5431e3adefce?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                'name' => 'Side Table', 
                'slug' => 'side-table',
                'thumbnail' => 'https://images.unsplash.com/photo-1675277719117-dfe34237199c?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'is_visible' => true,
                'published_at' => date(now())
            ],
            [
                'name' => 'Bathroom', 
                'slug' => 'bathroom',
                'thumbnail' => 'https://images.unsplash.com/photo-1651951646668-46562cfb4518?q=80&w=882&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'is_visible' => true,
                'published_at' => date(now())
            ],
        ]);
    }
}
