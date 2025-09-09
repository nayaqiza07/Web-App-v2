<?php

namespace App\Http\Requests\Settings\Address;

use Illuminate\Contracts\Validation\ValidationRule;
use App\Models\Address;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class DeleteAddressRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        if (!Auth::check()) {
            return false;
        }

        $address = $this->route('address');

        return $address && $address->user_id === Auth::id();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [];
    }

    // /**
    //  * Get custom validation error messages for the delete address request
    //  * 
    //  * @return array<string, string> Custom error messages for validation rules.
    //  */
    // public function messages(): array
    // {
    //     return [
    //         'id.required' => 'Address ID is required.',
    //         'id.exists' => 'The selected address does not exist or does not belong to you.'
    //     ];
    // }
}
