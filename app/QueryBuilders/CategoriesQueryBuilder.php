<?php

namespace App\QueryBuilders;

use App\Models\Category;
use Illuminate\Database\Eloquent\Builder;



final class CategoriesQueryBuilder extends QueryBuilder {

    public Builder $model;

    public function __construct(){
        $this->model = Category::query();
    }

    public function getAll()
    {
        return $this->model->get();
    }

    public function getPagination(int $quan=10)
    {
        return $this->model->paginate($quan);
    }

    public function getOne(int $id)
    {
        return $this->model->where('id', $id)->get();
    }
    public function getFromTitle(string $title)
    {
        return $this->model->where('title', '=', $title)->get();
    }

}
