<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Facades\Auth;

class Address extends Model
{
    /** @use HasFactory<\Database\Factories\AddressFactory> */
    use HasFactory;

    /**
     * The relationships tha should always be laoded with the model.
     *
     * @var array<int, string>
     */
    protected $with = ['user'];

    /**
     * Scope to show address that sync with user
     */
    public function scopeFilter(Builder $query): Builder
    {
        return $query->where('user_id', Auth::id());
    }

    /**
     * Relation with User
     * Many Address belongsTo 1 User
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Relation with Order
     * 1 Address has 1 Order
     */
    public function order(): HasOne
    {
        return $this->hasOne(Order::class);
    }
}
