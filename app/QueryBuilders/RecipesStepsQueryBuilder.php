<?php

namespace App\QueryBuilders;

use App\Models\RecipeStep;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

final class RecipesStepsQueryBuilder extends QueryBuilder
{

    private Builder $model;

    function __construct()
    {
        $this->model = RecipeStep::query();
    }

    function getAll(): Collection
    {
        return $this->model->get();
    }

    public function getRecipeOne(int $id)
    {
        return $this->model->where('id', $id)->get();
    }

    public function getRecipeStepById(int $id)
    {
        return $this->model->where('recipe_id', $id)->get();
    }
}
