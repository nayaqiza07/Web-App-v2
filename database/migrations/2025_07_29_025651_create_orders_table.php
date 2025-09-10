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

            /** Relation */
            $table->foreignId('user_id')->constrained(
                table: 'users', indexName: 'orders_user_id'
            )->onDelete('cascade');
            
            // FIXME: still confusing better address(foreignkey) or add address_snapshot
            $table->foreignId('address_id')->nullable()->constrained(
                table: 'addresses', indexName: 'orders_address_id'
            )->nullOnDelete();

            /** Invoice */
            $table->string('order_code')->unique();

            /** Status */
            $table->string('order_status')->default(OrderStatus::PENDING->value);
            
            /** Amount */
            $table->decimal('subtotal', total: 15, places: 2);
            $table->decimal('shipping_cost', total: 15, places: 2)->default(0);
            $table->decimal('total', total: 15, places: 2);

            $table->timestamps();
            $table->softDeletes();

            /** Indexing */
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
