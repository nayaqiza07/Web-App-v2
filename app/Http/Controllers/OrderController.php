<?php

namespace App\Http\Controllers;

use App\Http\Requests\Order\DestroyOrderRequest;
use App\Http\Requests\Order\StoreOrderRequest;
use App\Models\Order;
use App\Services\Order\OrderService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class OrderController extends Controller
{
    protected OrderService $orderService;

    public function __construct(OrderService $orderService)
    {
        $this->orderService = $orderService;
    }
    
    public function index (): Response
    {
        $orders = $this->orderService->getAllOrders();
        return Inertia::render('order/Order', [
            'ORDERS' => $orders,
        ]);
    }

    public function store (StoreOrderRequest $request): RedirectResponse
    {
        // Alur pembuatan order
        // 1. Pengguna menambahkan product ke dalam keranjang (membuat entri baru pada cart_items)
        // 2. Saat pengguna checkout, akan membuat entri baru di tabel orders
        // 3. Lalu yang awalnya ada pada cart_items akan ditambahkan entri baru di order_items (dan yang ada pada cart_items dihapus)
        try {
            $this->orderService->createOrder($request);
            return redirect()->back()->with('success', 'Order created successfully');
        } catch (\Exception $e) {
            Log::error("Order failed to create", [
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
            ]);
            return redirect()->back()->with('error', 'Failed to palce order');
        }
    }
    
    public function destroy (DestroyOrderRequest $request, Order $order): RedirectResponse
    {
        // Alur penghapusan / cancel order
        // 1. Pengguna melakukan klik pada tombol cancel (route yang mengarah ke controller destroy dengan method delete)
        // 2. Lalu id yang terkait dengan order yang dimiliki pengguna akan dicari
        // 3. jika ada, maka order dengan id tersebut akan dihapus (masuk ke deleted_at)

        try {
            $this->orderService->deleteOrder($order);
            return back()->with('success', 'The order has been cancelled.');
        } catch (\Exception $e) {
            Log::error("Order failed to cancel", [
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
            ]);
            return back()->with('error', 'Failed to delete the address. Please try again.');
        }
    }
}
