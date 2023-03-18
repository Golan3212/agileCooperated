<?php

namespace App\Services;

use App\Models\Menu;
use App\Models\Recipe;
use App\Models\Category;
use App\Models\Ingredient;
use App\Models\RecipeStep;
use App\Models\MenuForWeek;
use App\Services\Contracts\Parser;
use App\QueryBuilders\CategoriesQueryBuilder;
use Orchestra\Parser\Xml\Facade as XmlParser;
use App\QueryBuilders\IngredientsQueryBuilder;

class ParserService implements Parser
{
    private string $link;

    public function setLink($link)
    {
        $this->link = $link;
        return $this;
    }

    public function saveParserRecipesData()
    {
        $xmlDataString = file_get_contents(public_path('rss/recipe.xml'));
        $xmlObject = simplexml_load_string($xmlDataString);

        $json = json_encode($xmlObject);
        $recipes = json_decode($json, true);
        $categoryBuilder = new CategoriesQueryBuilder();

        $idMenuFromWeek = [];
        $menuIdRecipes = [];
        $recipeIdForMenu = [];
        foreach ($recipes['recipes'] as $keys => $recipesDay) {



            foreach ($recipesDay['recipe'] as $key => $recipe) {
                $categoryName = $recipe['category'];
                if ($categoryBuilder->getFromTitleFirst($categoryName) === null) {
                    // $category = new Category([
                    //     'title' => $categoryName,
                    // ]);
                    // $category->save();
                }else {
                    $category = $categoryBuilder->getFromTitleFirst(
                        $categoryName
                    );
                }

                $recipeModel = new Recipe([
                    'title' => (string) $recipe['title'],
                    'calorie' => (int) $recipe['calorie'],
                    'proteins' => (int) $recipe['proteins'],
                    'fats' => (int) $recipe['fats'],
                    'carbohydrates' => (int) $recipe['carbohydrates'],
                    'cooking_time' => (int) $recipe['time'],
                ]);
                $recipeModel->category()->associate($category->id);

                if ($recipeModel->save()) {
                    $recipeIdForMenu[] = $recipeModel->id;
                    foreach (
                        $recipe['ingridients']['ingridient']
                        as $key => $value
                    ) {
                        $ingredientsQueryBuilder = new IngredientsQueryBuilder();

                        if (
                            !$ingredientsQueryBuilder
                                ->getByTitle($value['title'])
                                ->count()
                        ) {
                            $ingredient = new Ingredient([
                                'title' => $value['title'],
                            ]);

                            if ($ingredient->save()) {
                                $ingredient
                                    ->recipes()
                                    ->attach($recipeModel->id, [
                                        'quantity_ingredient' =>
                                            (int) $value['quantity'],
                                        'mass_unit' => $value['mass_unit'],
                                    ]);
                            }
                        } else {
                            $ingredient = $ingredientsQueryBuilder->getByTitleFromUpdate(
                                $value['title']
                            );
                            $recipeModel
                                ->ingredients()
                                ->attach($ingredient['id'], [
                                    'quantity_ingredient' =>
                                        (int) $value['quantity'],
                                    'mass_unit' => $value['mass_unit'],
                                ]);
                        }
                    }

                    foreach ($recipe['steps']['step'] as $key => $value) {
                        $step = new RecipeStep([
                            'description' => $value,
                            'step_number' => $key + 1,
                        ]);
                        $step->recipe()->associate($recipeModel->id);
                        if ($step->save()) {
                            continue;
                        }
                    }
                }
            }
            $menuIdRecipes[] = $recipeIdForMenu;
            $recipeIdForMenu = [];
            // $menu = new Menu(['title' => "Меню $keys"]);
            // $menu->breakfest()->associate($menuIdRecipes[0]);
            // $menu->dinner()->associate($menuIdRecipes[1]);
            // $menu->lunch()->associate($menuIdRecipes[2]);
            // $menu->firstSnack()->associate($menuIdRecipes[3]);
            // $menu->secondSnack()->associate($menuIdRecipes[4]);
            // if ($menu->save()) {
            //     $idMenuFromWeek[] = $menu->id;
            //     if (!(count($idMenuFromWeek)%7)) {
            //         $idMenuFromWeekLast = array_slice($idMenuFromWeek, -7, 7);
            //         $week = new MenuForWeek();
            //         $week->monday()->associate($idMenuFromWeekLast[0]);
            //         $week->tuesday()->associate($idMenuFromWeekLast[1]);
            //         $week->wednesday()->associate($idMenuFromWeekLast[2]);
            //         $week->thursday()->associate($idMenuFromWeekLast[3]);
            //         $week->friday()->associate($idMenuFromWeekLast[4]);
            //         $week->saturday()->associate($idMenuFromWeekLast[5]);
            //         $week->sunday()->associate($idMenuFromWeekLast[6]);
            //         if ($week->save()) {
            //             continue;
            //         }
            //     }
            //     continue;
            // }

        }

        foreach ($menuIdRecipes as $key => $value) {

            $menu = new Menu();
            $menu->breakfest()->associate($value[0]);
            $menu->dinner()->associate($value[1]);
            $menu->lunch()->associate($value[2]);
            $menu->firstSnack()->associate($value[3]);
            $menu->secondSnack()->associate($value[4]);

            if ($menu->save()) {
                    $idMenuFromWeek[] = $menu->id;
                    if (!(count($idMenuFromWeek)%7)) {
                        $idMenuFromWeekLast = array_slice($idMenuFromWeek, -7, 7);
                        $week = new MenuForWeek();
                        $week->monday()->associate($idMenuFromWeekLast[0]);
                        $week->tuesday()->associate($idMenuFromWeekLast[1]);
                        $week->wednesday()->associate($idMenuFromWeekLast[2]);
                        $week->thursday()->associate($idMenuFromWeekLast[3]);
                        $week->friday()->associate($idMenuFromWeekLast[4]);
                        $week->saturday()->associate($idMenuFromWeekLast[5]);
                        $week->sunday()->associate($idMenuFromWeekLast[6]);
                        if ($week->save()) {
                            continue;
                        }
                    }
                }
        }
    }
}
