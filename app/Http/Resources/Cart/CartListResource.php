<?php

namespace App\Http\Resources\Cart;

use App\Http\Resources\Product\ProductCartItemResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CartListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'            => $this->id,
            'user_id'       => $this->user_id,
            'product'       => new ProductCartItemResource($this->whenLoaded('product'))->resolve(),
            'quantity'      => $this->quantity,
        ];
    }
}
