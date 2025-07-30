<?php

namespace App\Rules;

use App\Models\Product;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

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
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $product = Product::find($value);

        if (!$product) {
            $fail('Product not found');
            return;
        }

        if ($product->stock < $this->requestedQuantity) {
            $fail('Insufficient stock for this Product. Available Stock: ' . $product->stock);
        }
    }
}
