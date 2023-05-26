<?php

namespace App\QueryBuilders;

use App\Models\MenuForWeek;
use Illuminate\Database\Eloquent\Builder;

class MenuWeekQueryBuilder extends QueryBuilder {

    public Builder $model;

    public function __construct(){
        $this->model = MenuForWeek::query();
    }

    public function getAll()
    {
        return $this->model->get();
    }

    public function getMenuForWeekOne(int $id)
    {
        return $this->model->where('id', $id)->get();
    }

    public function getMenuForWeekByUserId(int $id)
    {
        return $this->model->where('user_id', $id)->get();
    }

    public function deleteById(int $id)
    {
        return $this->model->where('id', $id)->delete();
    }
}
