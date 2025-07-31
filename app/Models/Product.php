<?php

namespace App\Models;

use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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

        /** Images */
        'thumbnail',

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
        'category_id',
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
        'is_visible' => 'boolean',
        'published_at' => 'date',
    ];

    /**
     * The accessors to append to the model's array and JSON forms.
     *
     * @var array<int, string>
     */
    protected $appends = [
        'discount_percentage',
        'is_new',
        'thumbnail_url',
    ];

    /**
     * The relationships tha should always be laoded with the model.
     *
     * @var array<int, string>
     */
    protected $with = ['category', 'productImages'];

    /**
     * Accessor to counting discount percentage
     *
     * @return int|null
     */
    public function getDiscountPercentageAttribute()
    {
        if (! $this->old_price || $this->old_price <= $this->price) {
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
     * Accessor to determine if the thumbnail doesn't have /storage prefix
     *
     * @return bool
     */
    public function getThumbnailUrlAttribute(): ?string
    {
        return $this->thumbnail ? Storage::url($this->thumbnail) : null;
    }

    /**
     * Scope to show visible product that have visible category
     */
    public function scopeFilter(Builder $query): Builder
    {
        return $query->where('is_visible', true)
            ->whereHas('category', fn ($query) => $query->where('is_visible', true));
    }

    /**
     * Scope to show product by slug
     */
    public function scopeSlug(Builder $query, string $slug): Builder
    {
        return $query->where('slug', $slug);
    }

    /**
     * Relation with Category
     * Many Products is owned by 1 Category
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class)->where('is_visible', true);
    }

    /**
     * Relation with Cart Items
     * 1 Product can show in many Cart Items
     * Product (id = 3)
        └── CartItem #1 → user_id = 1
        └── CartItem #3 → user_id = 5
     */
    public function cartItems(): HasMany
    {
        return $this->hasMany(CartItem::class);
    }

    /**
     * Relation with Order Items
     * 1 Product hasMany Order Items
     */
    public function orderItems(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }

    /**
     * Relation with Reviews
     * 1 Product hasMany Reviews
     */
    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }

    /**
     * Relation with Product Images
     * 1 Product hasMany Product Images
     */
    public function productImages(): HasMany
    {
        return $this->hasMany(ProductImage::class);
    }
}
