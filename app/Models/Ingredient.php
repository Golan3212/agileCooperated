<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Ingredient extends Model
{
    use HasFactory;
    protected $table = 'ingredients';

    protected $fillable = [
        'title',
        'quantity',
        'mass_unit'
    ];

    public function recipe(): BelongsToMany
    {
        return $this->belongsToMany(Recipe::class, 'recipes_has_ingredients', 'ingredients_id', 'recipes_id');
    }

}
