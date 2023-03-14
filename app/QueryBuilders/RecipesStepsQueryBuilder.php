<?php

namespace App\QueryBuilders;
use App\Models\RecipeStep;
use Illuminate\Database\Eloquent\Builder;



final class RecipesStepsQueryBuilder extends QueryBuilder {

    public Builder $model;

    public function __construct(){
        $this->model = RecipeStep::query();
    }

    public function getAll()
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
