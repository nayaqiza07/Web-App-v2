<?php

namespace Database\Factories;

use App\Models\User;
use Database\Seeders\UserSeeder;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Address>
 */
class AddressFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'label'=> 'Home',
            'recipient_name'=> User::inRandomOrder()->first()?->name ?? User::factory(),
            'phone_number'=> User::inRandomOrder()->first()?->phone ?? User::factory(),
            'country' => fake()->country(),
            'state' => fake()->state(),
            'city' => fake()->city(),
            'street' => fake()->streetAddress(),
            'postal_code' => fake()->postcode(),
            'is_default' => false,

            /** Relation */
            'user_id' => User::inRandomOrder()->first()?->id ?? User::factory(), 
        ];
    }
}
