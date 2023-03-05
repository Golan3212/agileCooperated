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
        Schema::create('menu', function (Blueprint $table) {
            $table->id();
            $table->string('name', 191)->nullable()->default("Без названия");
            $table->foreignId('breakfest_id')->references('id')->on('recipes')->onDelete('cascade');
            $table->foreignId('dinner_id')->references('id')->on('recipes')->onDelete('cascade');
            $table->foreignId('lunch_id')->references('id')->on('recipes')->onDelete('cascade');
            $table->foreignId('first_snack_id')->references('id')->on('recipes')->onDelete('cascade');
            $table->foreignId('second_snack_id')->references('id')->on('recipes')->onDelete('cascade');
            $table->integer('total_calories')->unsigned()->nullable()->default(0);
            $table->integer('total_proteins')->unsigned()->nullable()->default(0);
            $table->integer('total_fats')->nullable()->default(0);
            $table->integer('total_carboh_ydrates')->nullable()->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menu');
    }
};
