<?php

namespace App\Http\Resources\Product;

use App\Http\Resources\Category\CategoryListResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductDetailResource extends JsonResource
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
            'information'           => $this->information,
            'dimensions'            => $this->dimensions,
            'materials'             => $this->materials,
            'shipping'              => $this->shipping,
            'sku'                   => $this->sku,
            'stock'                 => $this->stock,
            'category'              => new CategoryListResource($this->whenLoaded('category'))->resolve(),
            'product_images'        => ProductImageResource::collection($this->whenLoaded('productImages'))
                                        ->resolve()
        ];
    }
}
