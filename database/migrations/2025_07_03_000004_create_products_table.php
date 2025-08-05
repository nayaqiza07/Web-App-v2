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

            /** Detail */
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('thumbnail')->nullable();
            
            /** Pricing */
            $table->decimal('price', 10, 2);
            $table->decimal('old_price', 10, 2)->nullable();

            /** Description */
            $table->longText('information')->nullable();
            $table->json('dimensions')->nullable();
            $table->json('materials')->nullable();
            $table->longText('shipping')->nullable();

            /** Inventory */
            $table->string('sku')->unique();
            $table->integer('stock');
            $table->integer('security_stock')->default(0);

            /** Status */
            $table->boolean('is_visible')->default(false);
            $table->date('published_at')->nullable();

            /** Relation */
            $table->foreignId('category_id')->nullable()->constrained(
                table: 'categories', indexName: 'products_category_id'
            )->nullOnDelete();

            $table->timestamps();
            $table->softDeletes();

            /** Indexing */
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
