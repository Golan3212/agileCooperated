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
        Schema::table('profile_users', function (Blueprint $table) {
            $table->dropColumn('carbohydrates_norm');
            $table->dropColumn('fats_norm');
            $table->dropColumn('proteins_norm');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('profile_users', function (Blueprint $table) {
            $table->integer('carbohydrates_norm');
            $table->integer('fats_norm');
            $table->integer('proteins_norm');
        });
    }
};
