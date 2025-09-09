<?php

namespace App\Http\Requests\ProductImage;

use Illuminate\Contracts\Validation\ValidationRule;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class StoreProductImageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        if (!Auth::check()) {
            return false;
        }

        $user = User::find(Auth::id());

        if (!$user) {
            return false; 
        }

         return $user->hasRole(['Super Admin', 'Admin']);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'product_id' => ['required', 'integer', Rule::exists('products', 'id')],
            'path'       => ['required', 'string', 'url', 'max:255'],
            'alt'        => ['nullable', 'string', 'max:255'],

            // // Another option if we receive an image file
            // 'path'    => ['required', 'image', 'mimes:jpeg,png,jpg', 'max:2048'],
            // 'alt'     => ['nullable', 'string', 'max:255'],
        ];
    }
}
