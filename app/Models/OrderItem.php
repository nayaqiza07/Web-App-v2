<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OrderItem extends Model
{
    /**
     * Relation with Order
     * Each Order Items only owned by 1 Order
     */
    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }

    /**
     * Relation with Product
     * Each Order Items only refers to 1 Product
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}
