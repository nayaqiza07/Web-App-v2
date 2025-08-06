<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class Contact extends Model
{
    /** @use HasFactory<\Database\Factories\ContactFactory> */
    use HasFactory;

        /**
     * The "booted" method of the model
     * 
     */
    protected static function booted()
    {
        static::saved(function () {
            Cache::forget('contacts.list');
        });

        static::deleted(function () {
            Cache::forget('contacts.list');
        });
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'email_us',
        'chat_us',
        'call_us',
        'visit_us',
        'our_coordinate',
    ];
}
