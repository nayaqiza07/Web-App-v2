<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Symfony\Component\HttpFoundation\Response;

class CacheResponse
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->isMethod('GET')) {
            $cachekey = 'page-' . md5($request->fullUrl());

            if (Cache::has($cachekey)) {
                return response(Cache::get($cachekey));
            }

            $response = $next($request);

            Cache::put($cachekey, $response->getContent(), 300);

            return $response;
        }
        return $next($request);
    }
}
