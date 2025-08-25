<?php

namespace App\Models;

use App\Enums\OrderStatus;
use App\Enums\PaymentStatus;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class Order extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'user_id',
        'address_id',
        'code',
        'order_status',
        'payment_status',
        'payment_method',
        'subtotal',
        'shipping_cost',
        'total'
    ];

    protected $with = ['orderItems'];

    protected $casts = [
        'order_status' => OrderStatus::class,
        'payment_status' => PaymentStatus::class
    ];

    public static function generateCode()
    {
        $dateCode = '#' . date('Y') . '/' . date('m') . '/' . date('d') . '/';

        $lastOrder = self::selecct([DB::raw('MAX(orders.code) AS last_code')])
            ->where('code', 'like', $dateCode . '%')
            ->first();

        $lastOrderCode = !empty($lastOrder) ? $lastOrder['last_code'] : null;

        $orderCode = $dateCode . '00001';
        if ($lastOrderCode) {
            $lastOrderNumber = str_replace($dateCode, '', $lastOrderCode);
            $nextOrderNumber = sprintf('%05d', (int)$lastOrderNumber + 1);

            $orderCode = $dateCode . $nextOrderNumber;
        }

        if (self::isCodeExists($orderCode)) {
            return self::generateCode();
        }

        return $orderCode;
    }

    private static function isCodeExists($orderCode)
    {
        return Order::where('code', '=', $orderCode)->exists();
    }

    public function scopeFilter(Builder $query): Builder
    {
        return $query->where('user_id', Auth::id());
    }

    public function orderItems(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function address(): BelongsTo
    {
        return $this->belongsTo(Address::class);
    }
}
