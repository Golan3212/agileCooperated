<?php

namespace App\Http\Controllers;

use App\QueryBuilders\MenuQueryBuilder;
use App\QueryBuilders\MenuWeekQueryBuilder;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Inertia\Inertia;

class MenuWeekController extends Controller
{
    public function index(
        MenuWeekQueryBuilder $menuWeekQueryBuilder,
        MenuQueryBuilder $menuQueryBuilder,
        int $id
    )
    {
        $menuOneWeek = $menuWeekQueryBuilder->getMenuForWeekOne($id);

        $menuWeekOnDaysArray = [];
        foreach ($menuOneWeek as $key => $item) {
            $menuWeekOnDaysArray[]= [
                "menuMonday" => $menuQueryBuilder->getMenuForDayOne($item->menu_monday_id),
                "menuTuesday" => $menuQueryBuilder->getMenuForDayOne($item->menu_tuesday_id),
                "menuWednesday" => $menuQueryBuilder->getMenuForDayOne($item->menu_wednesday_id),
                "menuThursday" => $menuQueryBuilder->getMenuForDayOne($item->menu_thursday_id),
                "menuFriday" => $menuQueryBuilder->getMenuForDayOne($item->menu_friday_id),
                "menuSaturday" => $menuQueryBuilder->getMenuForDayOne($item->menu_saturday_id),
                "menuSunday" => $menuQueryBuilder->getMenuForDayOne($item->menu_sunday_id),
            ];
            $menuWeekAll = Arr::flatten($menuWeekOnDaysArray);
        }

        $menu = [];
        foreach ($menuWeekAll as $key => $item) {
            $menu[] = [
                'breakfast_title' => $item->breakfest->title,
                'dinner_title' => $item->dinner->title,
                'lunch_title' => $item->lunch->title,
                'firstSnack_title' => $item->firstSnack->title,
                'secondSnack_title' => $item->secondSnack->title
            ];
        };

        return Inertia::render('MenuBuilder', [
            'menu' => $menu
        ]);
    }
}
