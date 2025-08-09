<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;

class Faq extends Model
{
    /** @use HasFactory<\Database\Factories\FaqFactory> */
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'question',
        'answer',
        'is_visible',
        'published_at',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected $casts = [
        'is_visible' => 'boolean',
    ];

    /**
     * The "booted" method of the model
     * 
     */
    protected static function booted()
    {
        static::saved(function () {
            Cache::forget('faqs.support.list');
        });

        static::deleted(function () {
            Cache::forget('faqs.support.list');
        });
    }

    /**
     * Scope to show visible faq
     */
    public function scopeFilter(Builder $query): Builder
    {
        return $query->where('is_visible', true);
    }
}
