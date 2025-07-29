<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Review extends Model
{
    use SoftDeletes;

    protected $casts = [
        'images' => 'array'
    ];

    /**
     * Relation with User
     * Many Reviews belongsTo 1 User
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Relation with Product
     * Many Reviews belongsTo 1 Product
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}
