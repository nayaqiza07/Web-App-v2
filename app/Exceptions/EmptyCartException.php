<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\Request;

class EmptyCartException extends Exception
{
    public function __construct(string $message = "Your cart is empty.")
    {
        parent::__construct($message, 403);
    }

    public function render(Request $request)
    {
        if ($request->expectsJson()) {
            return response()->json([
                'message' => $this->getMessage(),
            ], 403);
        }

        return abort(403, $this->getMessage());
    }
}
