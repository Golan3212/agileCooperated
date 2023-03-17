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
            $table->integer('quantity_ingredient');
            $table->string('mass_unit', 100);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('recipes_has_ingredients', function (Blueprint $table) {
            $table->dropColumn('quantity_ingredient');
            $table->dropColumn('mass_unit');
        });
    }
};
