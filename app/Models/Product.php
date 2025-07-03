<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $casts = [
        'dimensions' => 'array',
        'materials' => 'array'
    ];
}
