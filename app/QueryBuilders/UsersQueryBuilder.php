<?php

namespace App\QueryBuilders;

use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

final  class UsersQueryBuilder extends QueryBuilder
{
    private Builder $model;

    function __construct()
    {
        $this->model = User::query();
    }

    function getAll(): Collection
    {
        return $this->model->get();
    }

    public function getById($id)
    {
        return $this->model->where('id', $id)->first();
    }

}
