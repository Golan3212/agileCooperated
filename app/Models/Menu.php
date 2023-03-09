<?php

namespace App\Models;

use App\Models\User;
use App\Models\Recipe;
use App\Models\OtherProduct;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Menu extends Model
{
    use HasFactory;

    protected $table = 'menu';

    protected $fillable = [
        'name',
        'total_calories',
        'total_proteins',
        'total_fats',
        'total_carboh_ydrates'
    ];

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'users_has_menu', 'menu_id', 'user_id');
    }

    public function otherProducts(): BelongsToMany
    {
        return $this->belongsToMany(OtherProduct::class, 'menu_has_other_products', 'menu_id', 'other_product_id');
    }

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
