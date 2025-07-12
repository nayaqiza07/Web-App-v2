<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Faq extends Model
{
    /** @use HasFactory<\Database\Factories\FaqFactory> */
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'question',
        'answer',
        'is_visible',
        'published_at'
    ];

    protected $casts = [
        'is_visible' => 'boolean'
    ];

    /** 
     * Scope to show visible faq 
     * 
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFilter(Builder $query): Builder
    {
        return $query->where('is_visible', true);
    }
}
