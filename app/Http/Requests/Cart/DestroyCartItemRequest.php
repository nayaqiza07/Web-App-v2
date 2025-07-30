<?php

namespace App\Http\Requests\Cart;

use App\Models\CartItem;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class DestroyCartItemRequest extends FormRequest
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
        return [
            'id' => [
                'required',
                'integer',
                Rule::exists('cart_items', 'id')->where(function ($query) {
                    $query->where('user_id', Auth::id());
                })
            ],
        ];
    }
}
