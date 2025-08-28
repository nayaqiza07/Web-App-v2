<?php

namespace App\Http\Resources\Order;

use App\Http\Resources\Product\ProductListCollection;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class OrderItemCollection extends ResourceCollection
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
            'order'             => new OrderListCollection($this->whenLoaded('order')),
            'product'           => new ProductListCollection($this->whenLoaded('product')),
            'product_name'      => $this->product_name,
            'quantity'          => $this->quantity,
            'price_snapshot'    => $this->price_snapshot
        ];
    }
}
