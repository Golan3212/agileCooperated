<?php

namespace App\Services;

use App\Services\TotalService;
use App\QueryBuilders\MenuQueryBuilder;


class ResetMenuConstructorService
{
    public function resetMenuById(int $menuId){

        $menu = new MenuQueryBuilder();
        $menu = $menu->getByIdFromUpdate($menuId)->first();

        $menuGuide = $menu->menuGuide()->first();

        $menu->breakfest()->associate($menuGuide->breakfest_id);
        $menu->dinner()->associate($menuGuide->dinner_id);
        $menu->lunch()->associate($menuGuide->lunch_id);
        $menu->firstSnack()->associate($menuGuide->first_snack_id);
        $menu->secondSnack()->associate($menuGuide->second_snack_id);
        if ($menu->save()) {
            $total = new TotalService();
            $total->getTotalMenuForDay($menu->id);
        }

    }
}
