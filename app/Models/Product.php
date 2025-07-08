<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        /** Detail */
        'name',
        'slug',

        /** Pricing */
        'price',
        'old_price',

        /** Description */
        'information',
        'dimensions',
        'materials',
        'shipping',

        /** Inventory */
        'sku',
        'stock',
        'security_stock',

        /** Status */
        'is_visible',
        'published_at',

        /** Relation */
        'category_id'
    ];

    protected $casts = [
        /** Description */
        'dimensions' => 'array',
        'materials' => 'array',

        /** Status */
        'is_visible' => 'boolean'
    ];

    /**
     * Filtering Products Data
     */
    public function scopeFilter(Builder $query): Builder
    {
        return $query->where('is_visible', true)
            ->whereHas('category', fn ($query) => $query->where('is_visible', true));
    }

    /**
     * Show by Slug
     */
    public function scopeSlug(Builder $query, string $slug): Builder
    {
        return $query->where('slug', $slug);
    }

    protected $with = ['category'];

    /**
     * Relation with Category
     * Many Products belongsTo 1 Category
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class)->where('is_visible', true);
    }
}
