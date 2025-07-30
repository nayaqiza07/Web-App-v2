<?php

namespace App\Http\Requests\Cart;

use App\Models\CartItem;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class UpdateCartItemRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $userId = Auth::id();
        $cartItemId = $this->input('id') ?? $this->route('id');

        if (!$userId || !$cartItemId) {
            return false;
        }

        return CartItem::where('id', $cartItemId)
                        ->where('user_id', $userId)
                        ->exists();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $cartItemId = $this->input('id') ?? $this->route('id');
        $cartItem = CartItem::find($cartItemId);

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
                        $fail('Insufficient stock for this Product. Available Stock: ' . $cartItem->product->stock);
                    }
                }
            ]
        ];
    }
}
