<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\QueryBuilders\MenuQueryBuilder;
use App\QueryBuilders\RecipesQueryBuilder;
use App\QueryBuilders\MenuWeekQueryBuilder;
use App\QueryBuilders\RecipesStepsQueryBuilder;

class MenuWeekController extends Controller
{
    public function index(
        MenuWeekQueryBuilder $menuWeekQueryBuilder,
        MenuQueryBuilder     $menuQueryBuilder,
        RecipesQueryBuilder $recipesQueryBuilder
    )
    {
        $menuOneWeek = Auth::user()->menuWeek()->get();

        $menuWeekOnDaysArray = [];
        $recipes = $recipesQueryBuilder->getAll()->random(20);


        foreach ($menuOneWeek as $key => $item) {
            $menuWeekOnDaysArray[] = [
                "menuMonday" => $menuQueryBuilder->getMenuForDayOne($item->menu_monday_id),
                "menuTuesday" => $menuQueryBuilder->getMenuForDayOne($item->menu_tuesday_id),
                "menuWednesday" => $menuQueryBuilder->getMenuForDayOne($item->menu_wednesday_id),
                "menuThursday" => $menuQueryBuilder->getMenuForDayOne($item->menu_thursday_id),
                "menuFriday" => $menuQueryBuilder->getMenuForDayOne($item->menu_friday_id),
                "menuSaturday" => $menuQueryBuilder->getMenuForDayOne($item->menu_saturday_id),
                "menuSunday" => $menuQueryBuilder->getMenuForDayOne($item->menu_sunday_id),
            ];
        }
        $menuWeekAll = Arr::flatten($menuWeekOnDaysArray);

        $menu = [];
        foreach ($menuWeekAll as $key => $item) {
            $menu[] = [
                'menu_id' => $item->id,
                'day_name' => $item->name,
                'totalCalories' => $item->total_calories,
                'totalProteins' => $item->total_proteins,
                'totalFats' => $item->total_fats,
                'totalCarbohydrates' => $item->total_carboh_ydrates,
                'menu_recipes'=> [
                    $item->breakfest->toArray(),
                    $item->firstSnack->toArray(),
                    $item->dinner->toArray(),
                    $item->secondSnack->toArray(),
                    $item->lunch->toArray(),
                ]
            ];
        };



        return Inertia::render('MenuBuilder', [
            'menu' => $menu,
            'recipes' => $recipes
        ]);
    }
}
