<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
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
            'name' => fake()->name(),
            'slug' => fake()->unique()->slug(),
            'thumbnail' => fake()->imageUrl(),

            /** Pricing */
            'price' => fake()->numberBetween(500000, 50000000),
            'old_price' => fake()->numberBetween(500000, 50000000),

            /** Description */
            'information' => fake()->text(500),
            'dimensions' => [
                'width' => fake()->numberBetween(40, 80),
                'depth' => fake()->numberBetween(60, 100),
                'height' => fake()->numberBetween(40, 80),
            ],
            'materials' => [
                'frame' => fake()->word(),
                'fabric' => fake()->word(),
            ],
            'shipping' => fake()->text(500),

            /** Inventory */
            'sku' => strtoupper(Str::random(6)),
            'stock' => fake()->numberBetween(0, 100),
            'security_stock' => fake()->numberBetween(0, 100),

            /** Status */
            'is_visible' => true,
            'published_at' => date(now()),

            /** Relation */
            'category_id' => Category::factory(),
        ];
    }
}
