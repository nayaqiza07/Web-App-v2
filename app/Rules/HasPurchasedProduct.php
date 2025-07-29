<?php

namespace App\Rules;

use App\Models\User;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Auth;

class HasPurchasedProduct implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $userId = Auth::id();

        if (!$userId) {
            $fail('You must be logged in to review products.');
            return;
        }

        try {
            $user = User::firstOrFail($userId);
            
            $hasPurchased = $user->orders()
                ->whereHas('orderItems', function ($query) use ($value) {
                    $query->where('product_id', $value);
                })
                ->exists();

            if (!$hasPurchased) {
                $fail('You can only review products you have purchased.');
            }
        } catch (ModelNotFoundException $e) {
            $fail('Authenticated user not found.');
        }
    }
}
