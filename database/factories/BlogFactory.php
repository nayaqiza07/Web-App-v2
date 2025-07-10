<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog>
 */
class BlogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            /** Detail */
            'title' => fake()->name(),
            'slug' => fake()->unique()->slug(),
            'thumbnail' => fake()->imageUrl(),

            /** Body */
            'body' => fake()->text(),

            /** Status */
            'is_visible' => true
        ];
    }
}
