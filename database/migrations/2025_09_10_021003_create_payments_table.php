<?php

use App\Enums\PaymentStatus;
use App\Enums\TransactionStatus;
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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();

            $table->foreignId('order_id')->constrained(
                table: 'orders', indexName: 'payments_order_id'
            )->onDelete('cascade');
            $table->string('transaction_id')->unique();
            $table->string('transaction_status')->default(TransactionStatus::PENDING->value);
            $table->string('fraud_status')->nullable();
            $table->string('payment_method');
            $table->string('payment_status')->default(PaymentStatus::WAITING->value);
            $table->decimal('gross_amount', total:15, places:2);
            $table->json('response_raw')->nullable();
            $table->timestamp('paid_at')->nullable();
            $table->timestamps();

            // FIXME: still confuse better adding payment_code, va_numbers, pdf_url columns or not
            // $table->string('payment_code')->nullable();
            // $table->json('va_numbers')->nullable();
            // $table->string('pdf_url')->nullable();

            $table->index('payment_status');
            $table->index('transaction_status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
