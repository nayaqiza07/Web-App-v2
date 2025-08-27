<?php

namespace App\Http\Requests\Cart;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class UpdateCartItemRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        if (!Auth::check()) {
            return false;
        }

        $cartItem = $this->route('cartItem');

        return $cartItem && $cartItem->user_id === Auth::id();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $cartItem = $this->route('cartItem');

        if (!$cartItem || !$cartItem->product) {
            return[];
        }

        return [
            'quantity' => [
                'required',
                'integer',
                'min:1',
                function ($attribute, $value, $fail) use ($cartItem) {
                    if ($cartItem->product->stock < $value) {
                        $fail('Insufficient stock for this Product.');
                    }
                }
            ]
        ];
    }
}
