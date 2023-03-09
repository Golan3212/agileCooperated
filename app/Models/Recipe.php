<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
        'category_id'
    ];
}
