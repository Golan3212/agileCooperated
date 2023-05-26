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
        Schema::table('recipe_steps', function (Blueprint $table) {
            $table->dropColumn('step_1');
            $table->dropColumn('step_2');
            $table->dropColumn('step_3');
            $table->dropColumn('step_4');
            $table->dropColumn('step_5');
            $table->dropColumn('step_6');
            $table->dropColumn('step_7');
            $table->dropColumn('step_8');
            $table->dropColumn('step_9');
            $table->dropColumn('step_10');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('recipe_steps', function (Blueprint $table) {
            $table->string('step_1',250)->nullable();
            $table->string('step_2',250)->nullable();
            $table->string('step_3',250)->nullable();
            $table->string('step_4',250)->nullable();
            $table->string('step_5',250)->nullable();
            $table->string('step_6',250)->nullable();
            $table->string('step_7',250)->nullable();
            $table->string('step_8',250)->nullable();
            $table->string('step_9',250)->nullable();
            $table->string('step_10',250)->nullable();
        });
    }
};
