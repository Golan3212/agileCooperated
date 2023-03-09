<?php

namespace App\Models;

use App\Models\Menu;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class OtherProduct extends Model
{
    use HasFactory;

    protected $table = 'other_products';


    protected $fillable = [
        'title',
        'calories',
        'proteins',
        'fats',
        'carboh_ydrates'
    ];


    public function menu(): BelongsToMany
    {
        return $this->belongsToMany(Menu::class, 'menu_has_other_products', 'other_product_id', 'menu_id');
    }
}
