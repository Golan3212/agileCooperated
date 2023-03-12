<?php

namespace App\Http\Controllers;

use App\QueryBuilders\IngredientsQueryBuilder;
use App\QueryBuilders\RecipesStepsQueryBuilder;
use Illuminate\Support\Arr;
use Inertia\Inertia;
use App\QueryBuilders\RecipesQueryBuilder;
use Inertia\Response;


class RecipeController extends Controller
{
    /**
     * @return Response
     */
    public function index(RecipesQueryBuilder $recipesQueryBuilder)
    {
        $recipeList = $recipesQueryBuilder->getAll();

        $recipes = [];
        foreach ($recipeList as $key => $recipe) {
            $recipes[] = [
                'id' => $recipe->id,
                'category_id' => $recipe->category_id,
                'title' => $recipe->title,
                'calorie' => $recipe->calorie,
                'proteins' => $recipe->proteins,
                'fats' => $recipe->fats,
                'carbohydrates' => $recipe->carbohydrates,
                'cooking_time' => $recipe->cooking_time,
                'category_title' => $recipe->category->title
            ];

        }
        return Inertia::render('Recipes', [
            'recipes' => $recipes
        ]);
    }

    public function show(
        RecipesQueryBuilder $recipesQueryBuilder,
        RecipesStepsQueryBuilder $recipesStepsQueryBuilder,
        int $id)
    {

        $data = $recipesQueryBuilder->getRecipeById($id);

        $recipeStepsBuilder = $recipesStepsQueryBuilder->getRecipeStepById($id);
        $recipeStepsList = [];
        $recipeOne = [];

        foreach ($recipeStepsBuilder as $key => $value) {
            $recipeStepsList[] = [
                'step_number' => $value->step_number,
                'description' => $value->description,
            ];
        }


        foreach ($data as $key => $value) {
            $recipeOne[] = [
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
                'steps' => $recipeStepsList,
                'count_steps' => last($recipeStepsList)["step_number"],
                'ingredients' => $value->ingredients,
            ];

        }
        //Рекомендации на страницу рецепт по номеру категории
        $advices_category_id = $data->value('category_id');
        $recipeAdvicesList = $recipesQueryBuilder
            ->getRecipeByCategoryId($advices_category_id)
            ->random(4);

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


        return Inertia::render('Recipe', [
            'recipeOne' => $recipeOne,
            'recipeOneAdvice' => $recipeOneAdvice
        ]);
    }
}