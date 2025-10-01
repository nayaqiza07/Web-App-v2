<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Scout\Searchable;

class Blog extends Model
{
    use HasFactory, SoftDeletes, Searchable;

    protected $fillable = [
        'title',
        'slug',
        'body',
        'is_visible',
        'published_at',
    ];

    protected $casts = [
        'is_visible' => 'boolean',
    ];

    public function toSearchableArray()
    {
        return [
            'id'        => $this->id,
            'thumbnail' => $this->thumbnail,
            'name'      => $this->name,
            'slug'      => $this->slug,
        ];
    }

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
