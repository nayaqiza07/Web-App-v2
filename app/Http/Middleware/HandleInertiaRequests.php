<?php

namespace App\Http\Middleware;

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
            'cart' => [
                'items' => function () {
                    $cacheKey = Auth::id();
                    if (Auth::check()) {
                        // Ambil item keranjang untuk pengguna yang sedang login
                        // return Cache::remember("cart.user.{$cacheKey}", 3600, function () {
                            return CartItem::where('user_id', Auth::id())
                                ->with('product:id,name,slug,category_id,thumbnail,price') // Ambil data produk yang relevan saja
                                ->get()
                                ->toArray();
                        // });
                    }
                    return null;
                },
                'total_items' => function () {
                    if (Auth::check()) {
                        // Ambil item keranjang untuk pengguna yang sedang login
                        return CartItem::where('user_id', Auth::id())
                            ->with('product:id,name,slug,category_id,thumbnail,price') // Ambil data produk yang relevan saja
                            ->count();
                    }
                    return null;
                },
            ],
        ];
    }
}
