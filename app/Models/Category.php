<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;

class Category extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'slug',
        'thumbnail',
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
     * The "booted" method of the model
     * 
     */
    protected static function booted()
    {
        static::saved(function ($category) {
            // Hapus cache yang terkait dengan kategori ini
            Cache::forget('categories.list');
            Cache::forget("categories?.slug={$category->slug}");
            
            // Hapus cache daftar produk karena perubahan kategori bisa memengaruhi produk
            Cache::forget('products.list');
            Cache::forget('products.related');
        });

        static::deleted(function ($category) {
            // Hapus cache yang sama saat kategori dihapus
            Cache::forget('categories.list');
            Cache::forget("categories?.slug={$category->slug}");
            Cache::forget('products.list');
            Cache::forget('products.related');
        });
    }

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
