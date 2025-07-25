<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'slug',
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
     * Scope to show visible category with count of products & order by ascending (a-z)
     */
    public function scopeFilter(Builder $query): Builder
    {
        return $query->where('is_visible', true)->withCount('products')->orderBy('name', 'asc');
    }

    /**
     * Scope to show category by slug (show product by category)
     */
    public function scopeSlug(Builder $query, string $slug): Builder
    {
        return $query->where('slug', $slug);
    }

    /**
     * Relation with Product
     * 1 Category hasMany Products
     */
    public function products(): HasMany
    {
        return $this->hasMany(Product::class)->where('is_visible', true);
    }
}
