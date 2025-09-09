<?php

namespace App\Http\Requests\Review;

use Illuminate\Contracts\Validation\ValidationRule;
use App\Rules\HasPurchasedProduct;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class StoreReviewRequest extends FormRequest
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
            'product_id' => ['required', 'integer', Rule::exists('products', 'id'), new HasPurchasedProduct],
            'rating'     => ['required', 'integer', 'min:1', 'max:5'],
            'comment'    => ['nullable', 'string', 'max:2000'],
            'images'     => ['nullable', 'array', 'max:5'],
            'images.*'   => ['url', 'max:255'],

            // Another Option if we receive an image file
            // 'images'   => ['nullable', 'array', 'max:5'],
            // 'images.*' => ['image', 'mimes:png,jpg,jpeg', 'max:2048'],
        ];
    }
}