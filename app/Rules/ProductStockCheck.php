<?php

namespace App\Rules;

use Illuminate\Translation\PotentiallyTranslatedString;
use App\Models\CartItem;
use App\Models\Product;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\Auth;

class ProductStockCheck implements ValidationRule
{
    protected $requestedQuantity;

    public function __construct($requestedQuantity)
    {
        $this->requestedQuantity = $requestedQuantity;
    }

    /**
     * Run the validation rule.
     *
     * @param Closure(string, ?string=):PotentiallyTranslatedString $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $product = Product::find($value);

        if (!$product) {
            $fail('Product not found.');
            return;
        }

        $userId = Auth::id();

        $existingCartItem = CartItem::where('user_id', $userId)
            ->where('product_id', $product->id)
            ->first();

        $totalRequested = $this->requestedQuantity;

        if ($existingCartItem) {
            $totalRequested += $existingCartItem->quantity;
        }

        if ($totalRequested > $product->stock) {
            $fail('Insufficient stock for this product.');
        }
    }
}
