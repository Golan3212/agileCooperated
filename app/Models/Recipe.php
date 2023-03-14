<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;


class Recipe extends Model
{
    use HasFactory;

    protected $table = 'recipes';

    protected $fillable = [
        'title',
        'image',
        'calorie',
        'proteins',
        'fats',
        'carbohydrates',
        'cooking_time',
        'portion',
        'created_at'
    ];

    public function category():BelongsTo
    {
        return $this->belongsTo(Category::class,
            'category_id');
    }

    public function ingredients():BelongsToMany
    {
        return $this->belongsToMany(Ingredient::class,
            'recipes_has_ingredients','recipes_id' , 'ingredients_id');
    }

}
