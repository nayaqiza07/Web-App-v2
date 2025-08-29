<?php

namespace App\Http\Resources\Product;

use App\Http\Resources\Category\CategoryListResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'                    => $this->id,
            'name'                  => $this->name,
            'slug'                  => $this->slug,
            'thumbnail'             => $this->thumbnail,
            'price'                 => $this->price,
            'old_price'             => $this->old_price,
            'is_new'                => $this->is_new,
            'discount_percentage'   => $this->discount_percentage,
            'category'              => new CategoryListResource($this->whenLoaded('category'))
        ];
    }
}
