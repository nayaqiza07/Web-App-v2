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
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        /** Label */
        'label',

        /** Recipient */
        'recipient_name',
        'phone_number',

        'country',
        'state',
        'city',
        'street',
        'postal_code',

        /** Status */
        'is_default',

        /** Relation */
        'user_id'
    ];

    /**
     * The relationships tha should always be laoded with the model.
     *
     * @var array<int, string>
     */
    protected $with = ['user'];

    /**
     * The "booted" method of the model
     * 
     * This Logic ensures only one default address per user
     */
    protected static function booted()
    {
        static::saving(function ($address) {
            if ($address->is_default) {
                static::where('user_id', $address->user_id)
                        ->where('id', '!=', $address->id)
                        ->update(['is_default' => false]);
            }
        });
    }

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
