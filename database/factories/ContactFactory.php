<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Contact>
 */
class ContactFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'email_us' => fake()->email(),
            'chat_us' => fake()->phoneNumber(),
            'call_us' => fake()->phoneNumber(),
            'visit_us' => fake()->streetAddress(),
            'our_coordinate' => fake()->address(),
        ];
    }
}
