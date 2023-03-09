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
        Schema::table('recipes_has_ingredients', function (Blueprint $table) {
            $table->dropForeign(['recipes_category_id']);
            $table->dropColumn('recipes_category_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('recipes_has_ingredients', function (Blueprint $table) {
            $table->foreignId('recipes_category_id')
                ->references('category_id')
                ->on('recipes')
                ->cascadeOnDelete();
        });
    }
};
