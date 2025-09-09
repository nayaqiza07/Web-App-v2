<?php

namespace App\Http\Requests\Order;

use Illuminate\Contracts\Validation\ValidationRule;
use App\Models\Order;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class DestroyOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $userId = Auth::id();
        $orderId = $this->input('id') || $this->route('id');

        if (!$userId || !$orderId) {
            return false;
        }

        return Order::where('id', $orderId)
                        ->where('user_id', $userId)
                        ->exists();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'id' => [
                'required',
                'integer',
                Rule::exists('orders', 'id')->where(function ($query) {
                    $query->where('user_id', Auth::id());
                })
            ]
        ];
    }
}
