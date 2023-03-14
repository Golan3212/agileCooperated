<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

use Illuminate\Support\Facades\DB;

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
        return $this->hasMany(Category::class);
    }

    public function getCategory()
    {
        return DB::table($this->table)->select(['id',  'title', 'created_at'])->get();
    }

}
