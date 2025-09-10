<?php

namespace App\Http\Requests\Order;

use Illuminate\Contracts\Validation\ValidationRule;
use App\Enums\OrderStatus;
use App\Enums\PaymentStatus;
use App\Models\Order;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class StoreOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'address_id'     => ['required', 'integer', Rule::exists('addresses', 'id')],
            // 'order_status'   => ['required', Rule::enum(OrderStatus::class)],
            // 'payment_status' => ['required', Rule::enum(PaymentStatus::class)],
            // // 'payment_method' => ['required', Rule::id(['manual_transfer', 'midtrans', 'stripe', 'xendit'])],
            // 'payment_method' => ['required', 'string', 'max:255'],
            // 'subtotal'       => ['required', 'decimal:15,2'],
            // 'shipping_cost'  => ['required', 'decimal:15,2'],
            // 'total'          => ['required', 'decimal:15,2'],
        ];
    }
}
