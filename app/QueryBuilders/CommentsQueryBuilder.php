<?php

namespace App\QueryBuilders;

use App\Models\Comment;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

class CommentsQueryBuilder extends QueryBuilder
{
    private Builder $model;

    function __construct()
    {
        $this->model = Comment::query();
    }

    function getAll(): Collection
    {
        return $this->model->get();
    }


    public function getCommentById(int $id)
    {
        return $this->model->where('id', $id)->get();
    }

    public function getCommentsByRecipeId(int $id)
    {
        return $this->model->where('recipe_id', $id)->orderByDesc('created_at')->get();
    }
}
