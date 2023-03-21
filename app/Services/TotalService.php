<?php

namespace App\Services;

use App\Services\Contracts\Total;
use App\QueryBuilders\MenuQueryBuilder;
use App\QueryBuilders\RecipesQueryBuilder;




class TotalService implements Total
{

    public function getTotalForDay(int $id){

        $menu = new MenuQueryBuilder();
        $menu = $menu->getByIdFromUpdate($id);

        $recipes = new RecipesQueryBuilder();


        $breakfest = $menu->first()->breakfest_id;
        $dinner = $menu->first()->dinner_id;
        $lunch = $menu->first()->lunch_id;
        $firstSnack = $menu->first()->first_snack_id;
        $secondSnack = $menu->first()->second_snack_id;

        $recipesArray = $recipes->getAllRecipesMenu($breakfest, $dinner, $lunch, $firstSnack, $secondSnack);


        $totalCalories = 0;
        $totalFats = 0;
        $totalCarbohydrates = 0;
        $totalProteins = 0;

        foreach ($recipesArray as $key => $value) {
            $totalCalories += $value->calorie;
            $totalFats += $value->fats;
            $totalCarbohydrates += $value->carbohydrates;
            $totalProteins += $value->proteins;
        }

        $total = [
            'total_calories'=> $totalCalories,
            'total_proteins'=> $totalProteins,
            'total_fats' => $totalFats,
            'total_carboh_ydrates' => $totalCarbohydrates,
        ];
        $menu->update($total);
        return $total;

    }
}
