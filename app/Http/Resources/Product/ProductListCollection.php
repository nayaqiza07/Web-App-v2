<?php

namespace App\Http\Resources\Product;

use App\Http\Resources\Category\CategoryListCollection;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductListCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'        => $this->id,
            'name'      => $this->name,
            'slug'      => $this->slug,
            'thumbnail' => $this->thumbnail,
            'price'     => $this->price,
            'old_price' => $this->old_price,
            'category'  => new CategoryListCollection($this->whenLoaded('category'))
        ];
    }
}
