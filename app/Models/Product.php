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
use Laravel\Scout\Searchable;

class Product extends Model
{
    use HasFactory, SoftDeletes, Searchable;

    protected $fillable = [
        'name',
        'slug',
        'thumbnail',
        'price',
        'old_price',
        'information',
        'dimensions',
        'materials',
        'shipping',
        'sku',
        'stock',
        'security_stock',
        'is_visible',
        'published_at',
        'category_id',
    ];

    protected $casts = [
        'dimensions' => 'array',
        'materials' => 'array',
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

    public function toSearchableArray(): array
    {
        return [
            'id'        => $this->id,
            'thumbnail' => $this->thumbnail,
            'name'      => $this->name,
            'slug'      => $this->slug,
            'price'     => $this->price,
            'old_price' => $this->old_price,
        ];
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
