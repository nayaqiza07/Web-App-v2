<?php

use App\Models\Blog;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

describe('Visit The Blog Page Test', function () {
    test('guest can visit blog page', function () {
        $response = $this->get(route('blogs.index'));
        $response->assertStatus(200);
    });
    
    test('authenticated users can visit blog page', function () {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->get(route('blogs.index'));
        $response->assertStatus(200);
    });
});

describe('Visit The Blog Detail Page', function () {
    test('guest can visit blog detail page', function () {
        $blog = Blog::factory()->create();
    
        $response = $this->get(route('blogs.show', $blog->slug));
    
        $response->assertStatus(200);
    });
    
    test('authenticated user can visit blog detail page', function () {
        $user = User::factory()->create();
        $blog = Blog::factory()->create();
    
        $response = $this->actingAs($user)->get(route('blogs.show', $blog->slug));
    
        $response->assertStatus(200);
    });
});