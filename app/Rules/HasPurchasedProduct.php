<?php

namespace App\Rules;

use Illuminate\Translation\PotentiallyTranslatedString;
use App\Models\User;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\Auth;

class HasPurchasedProduct implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param Closure(string, ?string=):PotentiallyTranslatedString $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $userId = Auth::id();
        $user = User::find($userId);

        if (!$userId) {
            $fail('You must be logged in to review products.');
            return;
        }

        if (!$user) {
            $fail('No authenticated user was found. Please try logging in again.');
            return;
        }
        
        $hasPurchased = $user->orders()
            ->whereHas('orderItems', function ($query) use ($value) {
                $query->where('product_id', $value);
            })
            ->where('status', 'delivered')
            ->exists();

        if (!$hasPurchased) {
            $fail('You can only review products you have purchased.');
        }
        
    }
}
