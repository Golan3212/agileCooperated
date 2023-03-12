<?php

namespace App\QueryBuilders;

use App\Models\Ingredient;
use App\Models\Recipe;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

final class IngredientsQueryBuilder extends QueryBuilder
{
    private Builder $model;

    function __construct()
    {
        $this->model = Ingredient::query();
    }

    function getAll(): Collection
    {
        return $this->model->get();
    }

    public function getIngredientsByRecipeId(int $recipe_id): Collection
    {
        return Ingredient::query()->where('recipe_id', $recipe_id)->get();
    }

    public function getIngredientById(int $id)
    {
        return $this->model->where('id', $id)->get();
    }
}
