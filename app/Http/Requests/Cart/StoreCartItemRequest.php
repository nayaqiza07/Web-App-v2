<?php

namespace App\Http\Requests\Cart;

use App\Rules\ProductStockCheck;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class StoreCartItemRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $requestedQuantity = $this->input('quantity');

        return [
            'product_id' => [
                'required',
                'integer',
                Rule::exists('products', 'id'),
                new ProductStockCheck($requestedQuantity),
            ],
            'quantity' => ['required', 'integer', 'min:1'],
        ];
    }
}
