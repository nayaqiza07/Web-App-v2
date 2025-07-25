<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Blog extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
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

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected $casts = [
        /** Status */
        'is_visible' => 'boolean',
    ];

    /**
     * Scope to show visible blog
     */
    public function scopeFilter(Builder $query): Builder
    {
        return $query->where('is_visible', true);
    }

    /**
     * Scope to show visible blog by slug
     */
    public function scopeSlug(Builder $query, string $slug): Builder
    {
        return $query->where('slug', $slug);
    }
}
