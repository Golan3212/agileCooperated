<?php

namespace App\Models;

use App\Models\Menu;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class MenuForWeek extends Model
{
    use HasFactory;

    protected $table = 'menu_for_week';

    public function user(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'users_has_menu_week', 'menu_id', 'user_id');
    }

    public function monday():BelongsTo
    {
        return $this->belongsTo(Menu::class, 'menu_monday_id');
    }

    public function tuesday():BelongsTo
    {
        return $this->belongsTo(Menu::class, 'menu_tuesday_id');
    }

    public function wednesday():BelongsTo
    {
        return $this->belongsTo(Menu::class, 'menu_wednesday_id');
    }

    public function thursday():BelongsTo
    {
        return $this->belongsTo(Menu::class, 'menu_thursday_id');
    }

    public function friday():BelongsTo
    {
        return $this->belongsTo(Menu::class, 'menu_friday_id');
    }

    public function saturday():BelongsTo
    {
        return $this->belongsTo(Menu::class, 'menu_saturday_id');
    }

    public function sunday():BelongsTo
    {
        return $this->belongsTo(Menu::class, 'menu_sunday_id');
    }

}
