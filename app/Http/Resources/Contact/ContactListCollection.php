<?php

namespace App\Http\Resources\Contact;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ContactListCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'                => $this->id,
            'email_us'          => $this->email_us,
            'chat_us'           => $this->chat_us,
            'call_us'           => $this->call_us,
            'visit_us'          => $this->visit_us,
            'our_coordinate'    => $this->our_coordinate
        ];
    }
}
