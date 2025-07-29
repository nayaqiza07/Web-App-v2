<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use SoftDeletes;

    /**
     * The relationships tha should always be laoded with the model.
     *
     * @var array<int, string>
     */
    protected $with = ['orderItems'];

    /**
     * Relation with Order Items
     * 1 Order hasMany Order Items
     * Order (id = 1)
        └── OrderItem #1 → product_id = 1
        └── OrderItem #3 → product_id = 5
     */
    public function orderItems(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }

    /**
     * Relation with User
     * Each Orders is owned by 1 User
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Relation with Address
     * 1 Order has 1 Address
     */
    public function address(): BelongsTo
    {
        return $this->belongsTo(Address::class);
    }
}
