<?php

namespace App\Models;

use App\Models\ProfileUser;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ProgressUser extends Model
{
    use HasFactory;

    protected $fillable = [
        'weight_progress',
        'calories_progress'
    ];


    public function profile()
    {
        return $this->belongsTo(ProfileUser::class, 'profile_user_id');
    }
}
