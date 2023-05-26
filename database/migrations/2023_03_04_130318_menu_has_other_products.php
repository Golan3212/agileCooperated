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
        Schema::create('menu_has_other_products', function (Blueprint $table) {
            $table->foreignId('menu_id')->references('id')->on('menu')->onDelete('cascade');
            $table->foreignId('other_product_id')->references('id')->on('other_products')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menu_has_other_products');
    }
};
