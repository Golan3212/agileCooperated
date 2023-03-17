<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /*
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('menu_for_week', function (Blueprint $table) {
            $table->id();
            $table->integer('total_calories')->nullable()->default(0);
            $table->foreignId('menu_monday_id')->references('id')->on('menu')->onDelete('cascade');
            $table->foreignId('menu_tuesday_id')->references('id')->on('menu')->onDelete('cascade');
            $table->foreignId('menu_wednesday_id')->references('id')->on('menu')->onDelete('cascade');
            $table->foreignId('menu_thursday_id')->references('id')->on('menu')->onDelete('cascade');
            $table->foreignId('menu_friday_id')->references('id')->on('menu')->onDelete('cascade');
            $table->foreignId('menu_saturday_id')->references('id')->on('menu')->onDelete('cascade');
            $table->foreignId('menu_sunday_id')->references('id')->on('menu')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /*
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menu_for_week');
    }
};
