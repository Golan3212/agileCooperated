<?php

namespace App\Http\Controllers;


use App\Models\Recipe;
use Illuminate\Contracts\View\View;
use Inertia\Inertia;
use Inertia\Response;

class RecipeController extends Controller
{
    /**
     * @return Response
     */
    public function index()
    {
        $recipeList = [];
        for ($i=1;$i<11;$i++){
//            $recipe = ['title'=>'recipe{$i}', 'cookingTime'=>'time{$i}', 'nutrition'=>'nutrition{$i}'];
            $recipe = new Recipe('title' . $i, $i, 'nutr' . $i, 'time' . $i);
            $recipeList[] = $recipe;

        }
        return Inertia::render('Recipes', [
            'list' => $recipeList
        ]);
    }

    public function show ()
    {
        return Inertia::render('Recipe');
    }

    public function send ()
    {
        return \view();
    }
}