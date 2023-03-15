<?php

namespace App\QueryBuilders;

use App\Models\ProfileUser;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;



final class ProfilesQueryBuilder extends QueryBuilder
{
    public Builder $model;

    public function __construct()
    {
        $this->model = ProfileUser::query();
    }

    function getAll(): Collection
    {
        return $this->model->get();
    }

    public function getByUserId(int $id)
    {
        return $this->model->where('user_id', $id)->get();
    }
    public function updateByUserId(int $id)
    {
        return $this->model->where('user_id', $id);
    }

    function getCaloricNorm(string $gender, int $age, int $height, int $weight)
    {
        if ($gender === 'male') {
            $calories = $height*5 - $age*6.8 + $weight*13.7 + 66;
        }else{
            $calories = $height*1.8 - $age*4.7 + $weight*9.6 + 655;
        }
        $calories = round($calories, 0);
        return $calories;
    }


    public function getKbzuNorm(float $target, int $calories)
    {
        switch ($target) {
            case 0.9:
                $proteinMin = 0.4;
                $proteinMax = 0.5;
                $fatMin = 0.3;
                $fatMax = 0.4;
                $carbohydratesMin = 0.1;
                $carbohydratesMax = 0.2;
                break;
             case 1:
                $proteinMin = 0.25;
                $proteinMax = 0.35;
                $fatMin = 0.25;
                $fatMax = 0.35;
                $carbohydratesMin = 0.3;
                $carbohydratesMax = 0.5;
                break;
            case 1.1:
                $proteinMin = 0.25;
                $proteinMax = 0.35;
                $fatMin = 0.15;
                $fatMax = 0.25;
                $carbohydratesMin = 0.4;
                $carbohydratesMax = 0.6;
                break;
            default:
            //
                break;
    }

    return [
        "proteins"=>["min" => round(($proteinMin * $calories)/4, 0), "max" => round(($proteinMax * $calories)/4, 0)],
        "fats"=>["min" => round(($fatMin * $calories)/9, 0), "max" => round(($fatMax * $calories)/9, 0)],
        "carbohydrates"=>["min" => round(($carbohydratesMin * $calories)/4, 0), "max" => round(($carbohydratesMax * $calories)/4, 0)]
    ];

    }

    public function getBodyMassIndex(int $weight, int $height)
    {
        $index = round(($weight / (($height / 100) ** 2)) * 10) / 10;
        return $index;
    }
}
