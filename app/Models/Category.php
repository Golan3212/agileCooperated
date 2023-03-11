<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Category extends Model
{
    use HasFactory;
    protected $table = 'categories';

    protected $fillable = [
        'id',
        'title',
    ];

    public function recipe()
    {
//        return $this->belongsTo(Recipe::class, 'recipe_id');
        return $this->hasMany(Category::class);
    }

}
