<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductImage extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'product_id',
        'path',
        'alt'
    ];

    /** 
     * Relation with Product
     * Each Product Images is owned by 1 Product
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}
