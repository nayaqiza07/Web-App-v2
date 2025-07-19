<?php

namespace App\Http\Requests\Settings\Address;

use App\Models\Address;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class SetDefaultAddressRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $addressId = $this->input('id') ?? $this->route('id');
        $userId = Auth::id();
        
        if (!$addressId || !$userId) {
            return false;
        }

        return Address::where('id', $addressId)
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
                Rule::exists('addresses', 'id')->where(function ($query) {
                    $query->where('user_id', Auth::id());
                })
            ],
            'is_active' => ['nullable', 'boolean'],
        ];
    }

    /**
     * Get custom validation error messages for the set default address request
     * 
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'id.required' => 'Address ID is required.',
            'id.exists' => 'The selected address does not exist or does not belong to you.'
        ];
    }
}
