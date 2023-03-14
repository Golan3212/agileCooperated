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
        Schema::create('profile_users', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->enum('gender', ['male', 'female']);
            $table->integer('weight');
            $table->integer('height');
            $table->integer('quotient');
            $table->integer('target');
            $table->integer('caloric_norm');
            $table->integer('proteins_norm');
            $table->integer('carbohydrates_norm');
            $table->integer('fats_norm');
            $table->integer('mass_index');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profile_users');
    }
};
