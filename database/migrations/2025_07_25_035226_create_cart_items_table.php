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
        Schema::create('cart_items', function (Blueprint $table) {
           $table->id();

            /** Relation */
            $table->foreignId('user_id')->constrained(
                table: 'users', indexName: 'carts_user_id'
            )->onDelete('cascade');
            
            $table->foreignId('product_id')->constrained(
                table: 'products', indexName: 'carts_product_id'
            )->onDelete('cascade');

            $table->integer('quantity')->default(1);

            // $table->unique(['user_id', 'product_id']);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cart_items');
    }
};
