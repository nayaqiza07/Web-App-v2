<?php

use App\Http\Middleware\HandleAppearance;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->encryptCookies(except: ['appearance', 'sidebar_state']);

        $middleware->web(append: [
            HandleAppearance::class,
            HandleInertiaRequests::class,
            AddLinkHeadersForPreloadedAssets::class,
        ]);

        $middleware->alias([
            'role' => \Spatie\Permission\Middleware\RoleMiddleware::class,
            'permission' => \Spatie\Permission\Middleware\PermissionMiddleware::class,
            'role_or_permission' => \Spatie\Permission\Middleware\RoleOrPermissionMiddleware::class,

            // 'cache.response' => \App\Http\Middleware\CacheResponse::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        $exceptions->respond(function (Response $response, Throwable $exception, Request $request) {
            $code = $response->getStatusCode();

            $customMessages = [
                403 => Auth::check()
                    ? 'Sorry, you are forbidden from accessing this page.'
                    : 'Whoops, you need to login first',
                404 => "Sorry, the page you are looking for doesn't exist.",
                500 => 'Whoops, something went wrong on our servers.',
                503 => 'Sorry, we are doing some maintenance. Please check back soon.',
            ];

            // if (in_array($code, [500, 503, 404, 403])) {
            if (!app()->environment(['local', 'testing']) && in_array($code, [500, 503, 404, 403])) {
                return Inertia::render('static/ErrorPage', [
                    'status' => $code,
                    'message' => $customMessages[$code] ?? null,
                ])
                ->toResponse($request)
                ->setStatusCode($code);
            } elseif ($response->getStatusCode() === 419) {
                return back()->with([
                    'message' => 'The page expired, please try again.',
                ]);
            }

            // if (! app()->environment(['local', 'testing']) && in_array($response->getStatusCode(), [500, 503, 404, 403])) {
            //     return Inertia::render('static/ErrorPage', ['status' => $response->getStatusCode()])
            //         ->toResponse($request)
            //         ->setStatusCode($response->getStatusCode());
            // } elseif ($response->getStatusCode() === 419) {
            //     return back()->with([
            //         'message' => 'The page expired, please try again.',
            //     ]);
            // }

            return $response;
        });
    })->create();
