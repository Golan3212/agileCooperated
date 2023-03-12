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
        Schema::create('recipes_has_ingredients', function (Blueprint $table) {
            $table->foreignId('recipes_id')
                ->references('id')
                ->on('recipes')
                ->cascadeOnDelete();

            $table->foreignId('ingredients_id')
                ->references('id')
                ->on('ingredients')
                ->cascadeOnDelete();

            $table->foreignId('recipes_category_id')
                ->references('category_id')
                ->on('recipes')
                ->cascadeOnDelete();

            $table->foreignId('recipes_recipe_steps_id')
                ->references('recipe_steps_id')
                ->on('recipes')
                ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recipes_has_ingredients');
    }
};
