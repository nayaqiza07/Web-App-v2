<?php

namespace App\Http\Resources\Order;

use App\Http\Resources\Product\ProductListResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderItemResource extends JsonResource
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
            'order'             => new OrderListResource($this->whenLoaded('order')),
            'product'           => new ProductListResource($this->whenLoaded('product')),
            'product_name'      => $this->product_name,
            'quantity'          => $this->quantity,
            'price_snapshot'    => $this->price_snapshot
        ];
    }
}
