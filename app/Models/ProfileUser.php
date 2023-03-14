<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ProfileUser extends Model
{
    use HasFactory;

    protected $table = 'profile_users';

    protected $fillable = [
        'gender',
        'weight',
        'height',
        'quotient',
        'target',
        'age',
        'caloric_norm',
        'mass_index',
        'carbohydrates_min',
        'fats_min',
        'proteins_min',
        'carbohydrates_max',
        'fats_max',
        'proteins_max',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
