<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
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

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected $casts = [
        /** Description */
        'dimensions' => 'array',
        'materials' => 'array',

        /** Status */
        'is_visible' => 'boolean'
    ];

    /**
     * The accessors to append to the model's array and JSON forms.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'discount_percentage',
        'is_new'
    ];

    /**
     * The relationships tha should always be laoded with the model.
     * 
     * @var array<int, string>
     */
    protected $with = ['category'];

    /**
     * Accessor to counting discount percentage
     * 
     * @return int|null
     */
    public function getDiscountPercentageAttribute()
    {
        if(!$this->old_price || $this->old_price <= $this->price){
            return null;
        }

        return round((($this->old_price - $this->price) / $this->old_price) * 100);
    }

    /**
     * Accessor to determine if the product is new (e.g. withing last 7 days)
     * 
     * @return bool
     */
    public function getIsNewAttribute()
    {
        return $this->created_at && $this->created_at->gt(now()->subDays(7));
    }

    /**
     * Scope to show visible product that have visible category
     * 
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFilter(Builder $query): Builder
    {
        return $query->where('is_visible', true)
            ->whereHas('category', fn ($query) => $query->where('is_visible', true));
    }

    /**
     * Scope to show product by slug
     * 
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeSlug(Builder $query, string $slug): Builder
    {
        return $query->where('slug', $slug);
    }

    /**
     * Relation with Category
     * Many Products belongsTo 1 Category
     * 
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class)->where('is_visible', true);
    }
}
