<?php

namespace App\Http\Middleware;

use App\Http\Resources\Address\AddressListResource;
use App\Http\Resources\Cart\CartListResource;
use App\Models\Address;
use App\Models\CartItem;
use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        [$message, $author] = str(Inspiring::quotes()->random())->explode('-');

        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'quote' => ['message' => trim($message), 'author' => trim($author)],
            'auth' => [
                'user' => $request->user(),
            ],
            'user_address' => function () {
                $deliveryAddress = Address::where('user_id', Auth::id())->where('is_default', true)->first();

                if (!Auth::check()) {
                    return collect();
                }

                return $deliveryAddress
                        ? new AddressListResource($deliveryAddress)->resolve()
                        : collect();
            },
            'ziggy' => fn (): array => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',
            'flash' => [
                'success' => session('success'),
                'info' => session('info'),
                'error' => session('error'),
            ],
            'cart' => function (): array {
                if (!Auth::check()) {
                    return [
                        'items' => collect(),
                        'total_items' => 0,
                        'total_price_items' => 0
                    ];
                }

                $cartItems = CartItem::where('user_id', Auth::id())->get();
                
                $totalPriceItems = $cartItems->sum(function ($item) {
                    return ($item->product->price ?? 0) * ($item->quantity ?? 1);
                });
                
                return [
                    'items' => CartListResource::collection($cartItems)->resolve(),
                    'total_items' => $cartItems->count(),
                    'total_price_items' => $totalPriceItems
                ];
            },
        ];
    }
}
