<?php

namespace App\Http\Requests\Settings\Address;

use App\Models\Address;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class UpdateAddressRequest extends FormRequest
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
            'country' => ['nullable', 'string', 'max:255'],
            'state' => ['nullable', 'string', 'max:255'],
            'city' => ['nullable', 'string', 'max:255'],
            'street' => ['nullable', 'string', 'max:255'],
            'zip' => ['nullable', 'string', 'max:30'],
            'is_active' => ['nullable', 'boolean'],
        ];
    }

    /**
     * Get custom validation error message for the update address request
     * 
     * @return array<string, string>
     */
    public function message(): array
    {
        return [
            'id.required' => 'Address ID is required.',
            'id.exists' => 'The selected address does not exist or does not belong to you.'
        ];
    }
}
