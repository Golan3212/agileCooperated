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
        Schema::create('progress_users', function (Blueprint $table) {
            $table->id();
            $table->integer('weight_progress');
            $table->integer('calories_progress');
            $table->foreignId('profile_user_id')->references('id')->on('profile_users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('progress_users');
    }
};
