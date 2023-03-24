<?php

namespace App\Http\Controllers;

use App\Http\Requests\RecipeRequest;
use App\QueryBuilders\MenuQueryBuilder;
use App\QueryBuilders\MenuWeekQueryBuilder;
use App\QueryBuilders\RecipesQueryBuilder;
use App\QueryBuilders\RecipesStepsQueryBuilder;
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
                'breakfast' => $item->breakfest->toArray(),
                'dinner' => $item->dinner->toArray(),
                'lunch' => $item->lunch->toArray(),
                'firstSnack' => $item->firstSnack->toArray(),
                'secondSnack' => $item->secondSnack->toArray(),
                'totalCalories' => $item->total_calories,
                'totalProteins' => $item->total_proteins,
                'totalFats' => $item->total_fats,
                'totalCarbohydrates' => $item->total_carboh_ydrates
            ];
        };

        return Inertia::render('MenuBuilder', [
            'menu' => $menu,
        ]);
    }



    public function show(
        RecipesQueryBuilder $recipesQueryBuilder,
        int $category_id
    )
    {
        $recipeAdvicesList = $recipesQueryBuilder->getRecipeByCategoryId($category_id)->random(3);

        $recipeOneAdvice =[];
        foreach ($recipeAdvicesList as $key => $value) {
            $recipeOneAdvice[] = [
                'id' => $value->id,
                'category_id' => $value->category_id,
                'title' => $value->title,
                'calorie' => $value->calorie,
                'proteins' => $value->proteins,
                'fats' => $value->fats,
                'carbohydrates' => $value->carbohydrates,
                'portion' => $value->portion,
                'cooking_time' => $value->cooking_time,
                'category_title' => $value->category->title,
            ];
        }


        return Inertia::render('CategoryBuilder', [
            'recipeOneAdvice' => $recipeOneAdvice,
        ]);
    }




}

