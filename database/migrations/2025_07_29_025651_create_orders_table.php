<?php

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

            /** Relation */
            $table->foreignId('user_id')->constrained(
                table: 'users', indexName: 'orders_user_id'
            )->onDelete('cascade');
            
            $table->foreignId('address_id')->constrained(
                table: 'addresses', indexName: 'orders_address_id'
            )->onDelete('cascade');

            $table->string('code')->unique();
            $table->enum('status', [
                    'pending', 'processing', 'shipped', 'delivered', 'canceled', 'refund'
                ])->default('pending');
            $table->string('payment_method');

            $table->decimal('subtotal', total: 15, places: 2);
            $table->decimal('shipping_cost', total: 15, places: 2)->default(0);
            $table->decimal('total', total: 15, places: 2)->default(0);

            $table->timestamps();
            $table->softDeletes();
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
