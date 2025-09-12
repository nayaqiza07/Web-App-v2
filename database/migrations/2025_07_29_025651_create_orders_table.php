<?php

use App\Enums\OrderStatus;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')->constrained(
                table: 'users', indexName: 'orders_user_id'
            )->onDelete('cascade');
            
            // FIXME: still confuse better address(foreignkey) or add address_snapshot
            // $table->json('address_snapshot')->nullable();
            $table->foreignId('address_id')->nullable()->constrained(
                table: 'addresses', indexName: 'orders_address_id'
            )->nullOnDelete();
            $table->string('order_code')->unique();
            $table->string('order_status')->default(OrderStatus::PENDING->value);
            $table->decimal('subtotal', total: 15, places: 2);
            $table->decimal('shipping_cost', total: 15, places: 2)->default(0);
            $table->decimal('total', total: 15, places: 2);

            // FIXME: still confuse better adding payment_token, payment_url, expired_at columns or not 
            // $table->string('payment_token')->nullable();
            // $table->string('payment_url')->nullable();
            // $table->timestamp('expired_at')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->index(['user_id', 'order_status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
