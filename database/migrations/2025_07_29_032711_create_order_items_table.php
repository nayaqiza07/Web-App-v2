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
        Schema::create('order_items', function (Blueprint $table) {
            $table->id();

            /** Relation */
            $table->foreignId('order_id')->constrained(
                table: 'orders', indexName: 'order_items_order_id'
            )->onDelete('cascade');
            
            $table->foreignId('product_id')->constrained(
                table: 'products', indexName: 'order_items_product_id'
            )->onDelete('cascade');

            $table->string('product_name');
            $table->integer('quantity');
            $table->decimal('price_snapshot', total: 15, places: 2);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_items');
    }
};
