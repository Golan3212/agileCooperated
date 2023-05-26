<?php

namespace App\QueryBuilders;
use App\Models\Menu;
use Illuminate\Database\Eloquent\Builder;



final class MenuQueryBuilder extends QueryBuilder {

    public Builder $model;

    public function __construct(){
        $this->model = Menu::query();
    }

    public function getAll()
    {
        return $this->model->get();
    }

    public function getPagination(int $quan=10)
    {
        return $this->model->paginate($quan);
    }


    public function getMenuForDayOne(int $id)
    {
        return Menu::query()->where('id', $id)->get();
    }

    public function getByIdFromUpdate(int $id)
    {
        return $this->model->where('id', $id);
    }

    public function getFromConstructor($calories, $protein_min, $fats_min, $carbohydrates_min, $proteins_max, $fats_max, $carbohydrates_max)
    {
        return $this->model->select('id')->whereBetween('total_calories', [$calories-150, $calories+150])
            ->orWhereBetween('total_proteins', [$protein_min, $proteins_max])
            ->orWhereBetween('total_fats', [$fats_min, $fats_max])
            ->orWhereBetween('total_carboh_ydrates', [$carbohydrates_min, $carbohydrates_max])->inRandomOrder()->get();
    }
}
