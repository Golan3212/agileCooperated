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
            $table->integer('carbohydrates_min');
            $table->integer('fats_min');
            $table->integer('proteins_min');
            $table->integer('carbohydrates_max');
            $table->integer('fats_max');
            $table->integer('proteins_max');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('profile_users', function (Blueprint $table) {
            $table->dropColumn('carbohydrates_min');
            $table->dropColumn('fats_min');
            $table->dropColumn('proteins_min');
            $table->dropColumn('carbohydrates_max');
            $table->dropColumn('fats_max');
            $table->dropColumn('proteins_max');
            $table->dropColumn('created_at');
            $table->dropColumn('updated_at');

        });
    }
};
