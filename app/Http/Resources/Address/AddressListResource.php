<?php

namespace App\Http\Resources\Address;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AddressListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'                => $this->id,
            'label'             => $this->label,
            'recipient_name'    => $this->recipient_name,
            'phone_number'      => $this->phone_number,
            'country'           => $this->country,
            'state'             => $this->state,
            'city'              => $this->city,
            'street'            => $this->street,
            'postal_code'       => $this->postal_code,
            'is_default'        => $this->is_default
        ];
    }
}
