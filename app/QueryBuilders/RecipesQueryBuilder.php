<?php

namespace App\QueryBuilders;

use App\Models\Recipe;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

final  class RecipesQueryBuilder extends QueryBuilder
{
    private Builder $model;

    function __construct()
    {
        $this->model = Recipe::query();
    }

    function getAll(): Collection
    {
        return $this->model->get();
    }

    function getAllWithPaginage(int $quantity = 12): Collection
    {
        return $this->model->get()->paginate($quantity);
    }

    public function getRecipeById(int $id)
    {
        return $this->model->where('id', $id)->get();
    }


    public function getRecipeByCategoryId(int $category_id): Collection
    {
        return Recipe::query()->where('category_id', $category_id)->get();
    }

}
