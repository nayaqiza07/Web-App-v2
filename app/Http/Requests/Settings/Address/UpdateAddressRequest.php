<?php

namespace App\Http\Requests\Settings\Address;

use Illuminate\Contracts\Validation\ValidationRule;
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
        return [
            'label'         => ['nullable', 'string', 'max:255'],
            'recipient_name'=> ['nullable', 'string', 'max:255'],
            'phone_number'  => ['nullable', 'string', 'max:255'],
            'country'       => ['nullable', 'string', 'max:255'],
            'state'         => ['nullable', 'string', 'max:255'],
            'city'          => ['nullable', 'string', 'max:255'],
            'street'        => ['nullable', 'string', 'max:255'],
            'postal_code'   => ['nullable', 'string', 'max:30'],
        ];
    }
}
