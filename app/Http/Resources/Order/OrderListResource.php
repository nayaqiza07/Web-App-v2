<?php

namespace App\Http\Resources\Order;

use App\Http\Resources\Address\AddressListResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderListResource extends JsonResource
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
            'user_id'           => $this->user_id,
            'address'           => new AddressListResource($this->whenLoaded('address')),
            'code'              => $this->code,
            'order_status'      => $this->order_status,
            'payment_status'    => $this->payment_status,
            'payment_method'    => $this->payment_method,
            'subtotal'          => $this->subtotal,
            'shipping_cost'     => $this->shipping_cost,
            'total'             => $this->total
        ];
    }
}
