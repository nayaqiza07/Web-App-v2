<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use function Laravel\Prompts\table;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();

            /** Relation */
            $table->foreignId('user_id')->constrained(
                table: 'users', indexName: 'reviews_user_id'
            )->onDelete('cascade');

            $table->foreignId('product_id')->constrained(
                table: 'products', indexName: 'reviews_product_id'
            )->onDelete('cascade');

            $table->tinyInteger('rating');
            $table->longText('comment')->nullable();
            $table->json('images')->nullable();

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reviews');
    }
};
