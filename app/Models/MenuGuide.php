<?php

namespace App\Models;

use App\Models\Recipe;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MenuGuide extends Model
{
    use HasFactory;

    protected $table='menu_guides';

    protected $fillable = [
        'name',
        'total_calories',
        'total_proteins',
        'total_fats',
        'total_carboh_ydrates'
    ];

    public function breakfest(): BelongsTo
    {
        return $this->belongsTo(Recipe::class, 'breakfest_id');
    }

    public function dinner(): BelongsTo
    {
        return $this->belongsTo(Recipe::class, 'dinner_id');
    }

    public function lunch(): BelongsTo
    {
        return $this->belongsTo(Recipe::class, 'lunch_id');
    }

    public function firstSnack(): BelongsTo
    {
        return $this->belongsTo(Recipe::class, 'first_snack_id');
    }

    public function secondSnack(): BelongsTo
    {
        return $this->belongsTo(Recipe::class, 'second_snack_id');
    }
}
