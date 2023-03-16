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
        Schema::create('menu_for_week', function (Blueprint $table) {
            $table->id();
            $table->integer('menu_monday_id');
            $table->integer('menu_tuesday_id');
            $table->integer('menu_wednesday_id');
            $table->integer('menu_thursday_id');
            $table->integer('menu_friday_id');
            $table->integer('menu_saturday_id');
            $table->integer('menu_sunday_id');
            $table->integer('total_calories');
            $table->foreignId('menu_id')
                ->constrained('menu')
                ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menu_for_week');
    }
};
