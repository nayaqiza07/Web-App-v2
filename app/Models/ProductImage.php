<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductImage extends Model
{
    /** 
     * Relation with Product
     * Each Product Images is owned by 1 Product
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}
