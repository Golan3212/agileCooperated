<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Recipe;
use App\Models\Ingredient;
use App\Models\RecipeStep;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\QueryBuilders\RecipesQueryBuilder;
use App\QueryBuilders\CategoriesQueryBuilder;
use App\QueryBuilders\IngredientsQueryBuilder;

class RecipesAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(RecipesQueryBuilder $recipesQueryBuilder)
    {
        $recipes = $recipesQueryBuilder->getAll();
        foreach ($recipes as $key => $value) {
            $recipe[]=[
                'id' => $value['id'],
                'title' => $value['title'],
                'image' => $value['image'],
                'calorie' => $value['calorie'],
                'proteins' => $value['proteins'],
                'fats' => $value['fats'],
                'carbohydrates' => $value['carbohydrates'],
                'portion' => $value['portion'],
                'cooking_time' => $value['cooking_time'],
                'category' => $value->category()->first()->title
            ];
        }

        return Inertia::render('Admin/RecipesList', [
            'list' => $recipe
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/RecipeCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, CategoriesQueryBuilder $categoriesQueryBuilder)
    {
        $validated = $request->validate([
            'id' => ['integer'],
            'title'=> ['string'],
            "image" =>['url', 'nullable'],
            "calorie" =>['integer'],
            "proteins" =>['integer'],
            "fats" =>['integer'],
            "carbohydrates"=>['integer'],
            "portion" =>['integer'],
            "cookingTime" => ['integer'],
            "category" =>['string'],
            "steps" =>['array'],
            'ingridients' => ['array']
        ]);

        $categoryId = $categoriesQueryBuilder->getByTitleFirst($validated['category'])->id;
        unset($validated['category']);

        $recipe = new Recipe($validated);
        $recipe->category()->associate($categoryId);

        if ($recipe->save()) {

            foreach ($validated['ingridients'] as $key => $value) {
                $ingredientsQueryBuilder = new IngredientsQueryBuilder();
                if (!$ingredientsQueryBuilder->getByTitle($value['title'])->count()) {
                    $ingredient = new Ingredient([
                        'title' => $value['title'],
                    ]);

                    if ($ingredient->save()) {
                        $ingredient->recipes()->attach($recipe->id, [
                                'quantity_ingredient' =>
                                    (int) $value['quantity'],
                                'mass_unit' => $value['mass_unit'],
                            ]);
                    }
                } else {
                    $ingredient = $ingredientsQueryBuilder->getByTitleFromUpdate(
                        $value['title']
                    );
                    $recipe->ingredients()->attach($ingredient['id'], [
                            'quantity_ingredient' =>
                                (int) $value['quantity'],
                            'mass_unit' => $value['mass_unit'],
                        ]);
                }
            }
            foreach ($validated['steps'] as $key => $value) {
                $step = new RecipeStep([
                    'description' => $value['description'],
                    'step_number' => $key + 1,
                ]);
                $step->recipe()->associate($recipe->id);
                if ($step->save()) {
                    continue;
                }
            }

            return redirect()->route('recipes');
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id, RecipesQueryBuilder $recipesQueryBuilder)
    {
        $recipe = $recipesQueryBuilder->getOneByIdFirst($id);
        $recipeArray = $recipe->ToArray();
        $recipeArray['category'] = $recipe->category()->first()->title;


        foreach ($recipe->ingredients()->get() as $key => $value) {
            $ingredients[] = [
                'title' => $value->title,
                'quantity' => $value->pivot->quantity_ingredient,
                'mass_unit' => $value->pivot->mass_unit
            ];
        }


        foreach($recipe->steps()->get() as $key => $value){
            $steps[] = [
                'description' => $value->description
            ];
        }

        $recipeArray['category'] = $recipe->category()->first()->title;
        $recipeArray['ingredients'] = $ingredients;
        $recipeArray['steps'] = $steps;


        return Inertia::render('Admin/RecipeUpdate', [
            'recipe' => $recipeArray
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, RecipesQueryBuilder $recipesQueryBuilder, CategoriesQueryBuilder $categoriesQueryBuilder)
    {
        $validated = $request->validate([
            'id' => ['integer'],
            'title'=> ['string'],
            "image" =>['url', 'nullable'],
            "calorie" =>['integer'],
            "proteins" =>['integer'],
            "fats" =>['integer'],
            "carbohydrates"=>['integer'],
            "portion" =>['integer'],
            "cookingTime" => ['integer'],
            "category" =>['string'],
            "steps" =>['array'],
            'ingridients' => ['array']
        ]);

        $categoryId = $categoriesQueryBuilder->getByTitleFirst($validated['category'])->id;

        unset($validated['category']);

        $recipe = $recipesQueryBuilder->getByIdUpdate($validated['id'])->first();


        $recipe->category()->associate($categoryId);


        if ($recipe->save()) {
            $recipe->ingredients()->detach();
            foreach ($validated['ingridients'] as $key => $value) {
                $ingredientsQueryBuilder = new IngredientsQueryBuilder();
                if (!$ingredientsQueryBuilder->getByTitle($value['title'])->count()) {
                    $ingredient = new Ingredient([
                        'title' => $value['title'],
                    ]);

                    if ($ingredient->save()) {
                        $ingredient->recipes()->attach($recipe->id, [
                                'quantity_ingredient' =>
                                    (int) $value['quantity'],
                                'mass_unit' => $value['mass_unit'],
                            ]);
                    }
                } else {
                    $ingredient = $ingredientsQueryBuilder->getByTitleFromUpdate(
                        $value['title']
                    );

                    $recipe->ingredients()->attach($ingredient['id'], [
                            'quantity_ingredient' =>
                                (int) $value['quantity'],
                            'mass_unit' => $value['mass_unit'],
                        ]);
                }
            }

            foreach ($recipe->steps()->get() as $key => $value) {
                $value->delete();
            }
            foreach ($validated['steps'] as $key => $value) {
                $step = new RecipeStep([
                    'description' => $value['description'],
                    'step_number' => $key + 1,
                ]);
                $step->recipe()->associate($recipe->id);
                if ($step->save()) {
                    continue;
                }
            }
            $recipe->update($validated);

        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id, RecipesQueryBuilder $recipesQueryBuilder)
    {
        $recipe = $recipesQueryBuilder->getByIdUpdate((int)$id)->first();

        $recipe->delete();
    }
}
