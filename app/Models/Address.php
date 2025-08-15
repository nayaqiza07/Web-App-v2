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
    use HasFactory;

    protected $fillable = [
        'label',
        'recipient_name',
        'phone_number',
        'country',
        'state',
        'city',
        'street',
        'postal_code',
        'is_default',
        'user_id'
    ];

    protected $with = ['user'];

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

    public function scopeFilter(Builder $query): Builder
    {
        return $query->where('user_id', Auth::id());
    }

    /** Relation */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function order(): HasOne
    {
        return $this->hasOne(Order::class);
    }
}
