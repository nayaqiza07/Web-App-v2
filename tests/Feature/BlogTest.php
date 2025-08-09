<?php

use App\Models\Blog;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('guest can visit blog page', function () {
    $response = $this->get('/blogs');

    $response->assertOk();
});

test('authenticated users can visit blog page', function () {
    $user = User::factory()->create();
    $response = $this->actingAs($user)->get('/blogs');

    $response->assertOk();
});

test('guest can visit blog detail page', function () {
    $blog = Blog::factory()->create();

    $response = $this->get("/blogs/{$blog->slug}");

    $response->assertOk();
});

test('authenticated user can visit blog detail page', function () {
    $user = User::factory()->create();
    $blog = Blog::factory()->create();

    $response = $this->actingAs($user)->get("/blogs/{$blog->slug}");

    $response->assertOk();
});