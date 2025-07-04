<?php

namespace App\Models;

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

    protected $with = ['category'];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
