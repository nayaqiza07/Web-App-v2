<?php

namespace App\Models;

use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Cache;

class Product extends Model
{
    use HasFactory, SoftDeletes;

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

    protected $casts = [
        /** Description */
        'dimensions' => 'array',
        'materials' => 'array',

        /** Status */
        'is_visible' => 'boolean',
        'published_at' => 'date',
    ];

    protected $appends = [
        'discount_percentage',
        'is_new',
    ];

    protected $with = ['category', 'productImages'];

    protected function discountPercentage(): Attribute
    {
        return Attribute::make(
            get: function () {
                if (! $this->old_price || $this->old_price <= $this->price) {
                    return null;
                }

                return round((($this->old_price - $this->price) / $this->old_price) * 100);
            }
        );
    }

    protected function isNew(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->created_at && $this->created_at->gt(now()->subDays(7))
        );
    }

    public function scopeFilter(Builder $query): Builder
    {
        return $query->where('is_visible', true)
            ->whereHas('category', fn ($query) => $query->where('is_visible', true));
    }

    public function scopeRelated(Builder $query, Product $product): Builder
    {
        return $query
                // ->where('category_id', $product->category_id)
                ->where('id', '!=', $product->id)
                ->whereBetween('price', [
                    $product->price * 0.8,
                    $product->price * 1.2
                ])
                ->latest()
                ->take(10);
    }

    public function scopeSlug(Builder $query, string $slug): Builder
    {
        return $query->where('slug', $slug);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class)->where('is_visible', true);
    }

    public function cartItems(): HasMany
    {
        return $this->hasMany(CartItem::class);
    }

    public function orderItems(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }

    public function productImages(): HasMany
    {
        return $this->hasMany(ProductImage::class);
    }
}
