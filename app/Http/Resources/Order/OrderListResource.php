<?php

namespace App\Http\Resources\Order;

use App\Http\Resources\Address\AddressListResource;
use App\Http\Resources\User\UserResource;
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
            'user'              => new UserResource($this->whenLoaded('user'))->resolve(),
            'address'           => new AddressListResource($this->whenLoaded('address'))->resolve(),
            'order_code'        => $this->order_code,
            'order_status'      => $this->order_status,
            'subtotal'          => $this->subtotal,
            'shipping_cost'     => $this->shipping_cost,
            'total'             => $this->total,
            'order_items'       => OrderItemResource::collection($this->whenLoaded('orderItems'))->resolve()
        ];
    }
}
