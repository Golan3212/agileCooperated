<?php

namespace App\Http\Controllers;

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
        MenuQueryBuilder     $menuQueryBuilder,
        int                  $id,
        RecipesQueryBuilder $recipesQueryBuilder,
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

                'breakfast_id' => $item->breakfest->id,
                'breakfast_category' => $item->breakfest->category_id,
                'breakfast_title' => $item->breakfest->title,
//                'breakfast_calorie' => $item->breakfast->calorie,
//                'breakfast_fats' => $item->breakfast->fats,
//                'breakfast_carbohydrates' => $item->breakfast->carbohydrates,
//                'dinner_portion' => $item->breakfast->portion,
//                'breakfast_cooking_time' => $item->breakfast->cooking_time,
//                'category_title' => $item->breakfast->category->title,


                'dinner_id' => $item->dinner->id,
                'dinner_category' => $item->dinner->category_id,
                'dinner_title' => $item->dinner->title,
                'dinner_calorie' => $item->dinner->calorie,
                'dinner_fats' => $item->dinner->fats,
                'dinner_carbohydrates' => $item->dinner->carbohydrates,
                'dinner_portion' => $item->dinner->portion,
                'dinner_cooking_time' => $item->dinner->cooking_time,
                'category_title' => $item->dinner->category->title,

                'lunch_id' => $item->lunch->id,
                'lunch_category' => $item->lunch->category_id,
                'lunch_title' => $item->lunch->title,

                'firstSnack_id' => $item->firstSnack->id,
                'firstSnack_category' => $item->firstSnack->category_id,
                'firstSnack_title' => $item->firstSnack->title,

                'secondSnack_id' => $item->secondSnack->id,
                'secondSnack_category' => $item->secondSnack->category_id,
                'secondSnack_title' => $item->secondSnack->title
            ];
        };

        //Рекомендации рецептов по номеру категории - сюда нужно добавить переменную, которая приходит со страницы
        $recipeAdvicesList = $recipesQueryBuilder->getRecipeByCategoryId(1)->random(8);


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


        return Inertia::render('MenuBuilder', [
            'menu' => $menu,
            'recipeOneAdvice' => $recipeOneAdvice
        ]);
    }


}
