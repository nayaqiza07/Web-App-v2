<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Blog extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        /** Detail */
        'title',
        'slug',

        /** Body */
        'body',

        /** Status */
        'is_visible',
        'published_at',
    ];

    protected $casts = [
        /** Status */
        'is_visible' => 'boolean',
    ];

    public function scopeLatest(Builder $query): Builder
    {
        return $query->orderBy('published_at', 'desc');
    }

    public function scopeFilter(Builder $query): Builder
    {
        return $query->where('is_visible', true);
    }

    public function scopeSlug(Builder $query, string $slug): Builder
    {
        return $query->where('slug', $slug);
    }
}
