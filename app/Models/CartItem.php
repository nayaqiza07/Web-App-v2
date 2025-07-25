<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CartItem extends Model
{
    /**
     * Relation with User
     * Each cart item is owned by 1 user
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Relation with Product
     * Each cart item only refers to 1 Product
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}
