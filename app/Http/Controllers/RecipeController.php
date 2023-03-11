<?php

namespace App\Http\Controllers;

use App\QueryBuilders\RecipesStepsQueryBuilder;
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
//        IngredientsQueryBuilder $ingredientsQueryBuilder,
        int $id)
    {
//        $ingredients= $ingredientsQueryBuilder->getIngredientsById($id);
//        dd($ingredients);
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
//        $IngredientsList = [];
//
//        foreach ($ingredients as $key => $value) {
//            $IngredientsList[] = [
//                'title' => $value->title,
//                'mass_unit' => $value->mass_unit,
//            ];
//        }

        foreach ($data as $key => $value) {
            $recipeOne[] = [
                'id' => $value->id,
                'category_id' => $value->category_id,
                'title' => $value->title,
                'calorie' => $value->calorie,
                'proteins' => $value->proteins,
                'fats' => $value->fats,
                'carbohydrates' => $value->carbohydrates,
                'cooking_time' => $value->cooking_time,
                'category_title' => $value->category->title,
                'steps' => $recipeStepsList,
                'count_steps' => last($recipeStepsList)["step_number"],
//                'ingredients' => $value->ingredients
            ];
        }

        return Inertia::render('Reci', [
            'recipeOne' => $recipeOne,
        ]);
    }
}