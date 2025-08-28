<?php

namespace App\Http\Resources\Faq;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class FaqListCollection extends ResourceCollection
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
            'question'  => $this->question,
            'answer'    => $this->answer
        ];
    }
}
