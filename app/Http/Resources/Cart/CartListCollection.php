<?php

namespace App\Http\Resources\Cart;

use App\Http\Resources\Product\ProductCartItemCollection;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class CartListCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'            => $this->id,
            'user_id'       => $this->user_id,
            'product'       => new ProductCartItemCollection($this->whenLoaded('product')),
            'quantity'      => $this->quantity,
        ];
    }
}
