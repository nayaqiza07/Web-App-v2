<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use Laravel\Scout\Searchable;

class Category extends Model
{
    use HasFactory, SoftDeletes, Searchable;

    protected $fillable = [
        'name',
        'slug',
        'thumbnail',
        'is_visible',
        'published_at',
    ];

    protected $casts = [
        'is_visible' => 'boolean',
    ];

    public function toSearchableArray(): array
    {
        return [
            'id'        => $this->id,
            'thumbnail' => $this->thumbnail,
            'name'      => $this->name,
            'slug'      => $this->slug,
        ];
    }

    public function scopeFilter(Builder $query): Builder
    {
        return $query->where('is_visible', true)->withCount('products')->orderBy('name', 'asc');
    }

    public function scopeSlug(Builder $query, string $slug): Builder
    {
        return $query->where('slug', $slug);
    }

    public function products(): HasMany
    {
        return $this->hasMany(Product::class)->where('is_visible', true);
    }
}
