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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('thumbnail')->nullable();
            $table->decimal('price', 10, 2);
            $table->decimal('old_price', 10, 2)->nullable();
            $table->longText('information')->nullable();
            $table->json('dimensions')->nullable();
            $table->json('materials')->nullable();
            $table->longText('shipping')->nullable();
            $table->string('sku')->unique();
            $table->integer('stock');
            $table->integer('security_stock')->default(0);
            $table->boolean('is_visible')->default(false);
            $table->date('published_at')->nullable();
            $table->foreignId('category_id')->nullable()->constrained(
                table: 'categories', indexName: 'products_category_id'
            )->nullOnDelete();
            $table->timestamps();
            $table->softDeletes();

            $table->index('price');
            $table->index('is_visible');
            $table->index(['is_visible', 'stock']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
