<?php

namespace App\Services;

use App\Models\Menu;
use App\Models\MenuGuide;
use App\Models\MenuForWeek;
use App\Services\TotalService;
use Illuminate\Support\Facades\Auth;
use App\QueryBuilders\MenuQueryBuilder;
use App\Services\Contracts\Constructor;
use App\QueryBuilders\UsersQueryBuilder;
use App\QueryBuilders\RecipesQueryBuilder;
use App\QueryBuilders\MenuWeekQueryBuilder;
use App\QueryBuilders\ProfilesQueryBuilder;
use App\QueryBuilders\MenuGuideQueryBuilder;
use App\QueryBuilders\CategoriesQueryBuilder;




class ConstructorService implements Constructor
{

    public function constructor()
    {

        $userProfile = new ProfilesQueryBuilder();
        $userProfile = $userProfile->getByUserIdLast(\Auth::id());

        $caloricNorm = $userProfile->caloric_norm;
        $fatsNorm = (int)round(($userProfile->fats_min + $userProfile->fats_max)/2);
        $proteinsNorm = (int)round(($userProfile->proteins_min + $userProfile->proteins_max)/2);
        $carbohydratesNorm = (int)round(($userProfile->carbohydrates_min + $userProfile->carbohydrates_max)/2);

        $menuGuide = new MenuGuideQueryBuilder();

        $menuGuide = $menuGuide->getFromConstructor(
            $userProfile->caloric_norm,
            $userProfile->fats_min,
            $userProfile->proteins_min,
            $userProfile->carbohydrates_min,
            $userProfile->fats_max,
            $userProfile->proteins_max,
            $userProfile->carbohydrates_max
        );

        $idMenuForWeek = [];
        if ($menuGuide->count() > 7 && $menuGuide->count() < 15) {

            foreach ($menuGuide as $key => $value) {
                if (count($idMenuForWeek) === 6) {
                    break;
                }

                $menu = new Menu();

                $menu->breakfest()->associate($value->breakfest_id);
                $menu->dinner()->associate($value->dinner_id);
                $menu->lunch()->associate($value->lunch_id);
                $menu->firstSnack()->associate($value->first_snack_id);
                $menu->secondSnack()->associate($value->second_snack_id);
                $menu->menuGuide()->associate($value->id);

                if ($menu->save()) {
                        $total = new TotalService();
                        $total->getTotalMenuForDay($menu->id);
                        $idMenuForWeek[] = $menu->id;
                    }
            }

            $idMenuForWeek[] = $this->createMenuFromCaloricNorm($caloricNorm, $fatsNorm, $proteinsNorm, $carbohydratesNorm);


        }elseif($menuGuide->count() > 14){
            foreach ($menuGuide as $key => $value) {
                if (count($idMenuForWeek) === 7) {
                    break;
                }
                $menu = new Menu();

                $menu->breakfest()->associate($value->breakfest_id);
                $menu->dinner()->associate($value->dinner_id);
                $menu->lunch()->associate($value->lunch_id);
                $menu->firstSnack()->associate($value->first_snack_id);
                $menu->secondSnack()->associate($value->second_snack_id);
                $menu->menuGuide()->associate($value->id);

                if ($menu->save()) {
                    $total = new TotalService();
                    $total->getTotalMenuForDay($menu->id);
                    $idMenuForWeek[] = $menu->id;
                }
            }

        }elseif($menuGuide->count() < 8) {
            for ($i=0; $i < 7; $i++) {
                $idMenuForWeek[] = $this->createMenuFromCaloricNorm($caloricNorm, $fatsNorm, $proteinsNorm, $carbohydratesNorm);
            }
        }


        if (count($idMenuForWeek) < 6) {
            dd('error');
        }

        $menuWeek = new MenuForWeek();

        $menuWeek->monday()->associate($idMenuForWeek[0]);
        $menuWeek->tuesday()->associate($idMenuForWeek[1]);
        $menuWeek->wednesday()->associate($idMenuForWeek[2]);
        $menuWeek->thursday()->associate($idMenuForWeek[3]);
        $menuWeek->friday()->associate($idMenuForWeek[4]);
        $menuWeek->saturday()->associate($idMenuForWeek[5]);
        $menuWeek->sunday()->associate($idMenuForWeek[6]);

        if ($menuWeek->save()) {
            $this->checkAndDropMenuWeek();
            $menuWeek->user()->sync(\Auth::id());

        }


        // $total = $totalService->getTotalForDay($item->id);
    }

    public function checkAndDropMenuWeek()
    {
        $user = new UsersQueryBuilder();
        $user = $user->getById(\Auth::id());

        if ($user->menuWeek()->pluck('id')->count()) {
            foreach ($user->menuWeek()->pluck('id') as $key => $value) {
                $menuWeekDelete = new MenuWeekQueryBuilder();
                $menuWeekDelete->deleteById($value);
            }
        }

    }

    public function getCategoryList()
    {
        $category = new CategoriesQueryBuilder();
        $category = $category->getAll();

        $categoryList = [];
        foreach ($category as $key => $value) {
            $categoryList[$value->title] = $value->id;
        }

        return $categoryList;
    }

    public function createMenuFromCaloricNorm(int $caloricNorm, int $fats, int $proteins, int $carbohydrates)
    {

        $categoryList = $this->getCategoryList();
        $normDay = [
            'breakfestCaloricNorm' => [
                'caloric' => (int)round($caloricNorm * 0.3),
                'fats' => (int)round($fats * 0.3),
                'proteins' => (int)round($proteins * 0.3),
                'carbohydrates' => (int)round($carbohydrates * 0.3),
                'category' => $categoryList['Завтрак'],
            ],
            'lunchCaloricNorm' => [
                'caloric' => (int)round($caloricNorm * 0.35),
                'fats' => (int)round($fats * 0.35),
                'proteins' => (int)round($proteins * 0.35),
                'carbohydrates' => (int)round($carbohydrates * 0.35),
                'category' =>  $categoryList['Обед']
            ],
            'dinnerCaloricNorm' => [
                'caloric' => (int)round($caloricNorm * 0.25),
                'fats' => (int)round($fats * 0.25),
                'proteins' => (int)round($proteins * 0.25),
                'carbohydrates' => (int)round($carbohydrates * 0.25),
                'category' =>  $categoryList['Ужин']
            ],
            'firstSnackCaloricNorm' => [
                'caloric' => (int)round($caloricNorm * 0.05),
                'fats' => (int)round($fats * 0.05),
                'proteins' => (int)round($proteins * 0.05),
                'carbohydrates' => (int)round($carbohydrates * 0.05),
                'category' =>  $categoryList['Перекус']
            ],
            'secondSnackCaloricNorm' => [
                'caloric' => (int)round($caloricNorm * 0.05),
                'fats' => (int)round($fats * 0.05),
                'proteins' => (int)round($proteins * 0.05),
                'carbohydrates' => (int)round($carbohydrates * 0.05),
                'category' =>  $categoryList['Перекус']
            ],
        ];

        foreach ($normDay as $key => $value) {
            $recipe = new RecipesQueryBuilder();

            $recipeIdForCreateMenu[$key] = $recipe->getRecipeIdByCaloricNorm($value['caloric'], $value['fats'], $value['proteins'], $value['carbohydrates'], $value['category'])->id;
        }


        $createMenuGuide = new MenuGuide();

        $createMenuGuide->breakfest()->associate($recipeIdForCreateMenu['breakfestCaloricNorm']);
        $createMenuGuide->dinner()->associate($recipeIdForCreateMenu['lunchCaloricNorm']);
        $createMenuGuide->lunch()->associate($recipeIdForCreateMenu['dinnerCaloricNorm']);
        $createMenuGuide->firstSnack()->associate($recipeIdForCreateMenu['firstSnackCaloricNorm']);
        $createMenuGuide->secondSnack()->associate($recipeIdForCreateMenu['secondSnackCaloricNorm']);

        if ($createMenuGuide->save()) {
            $total = new TotalService();
            $total->getTotalMenuGuideForDay($createMenuGuide->id);

            $createMenu = new Menu();

            $createMenu->breakfest()->associate($createMenuGuide->breakfest_id);
            $createMenu->dinner()->associate($createMenuGuide->dinner_id);
            $createMenu->lunch()->associate($createMenuGuide->lunch_id);
            $createMenu->firstSnack()->associate($createMenuGuide->first_snack_id);
            $createMenu->secondSnack()->associate($createMenuGuide->second_snack_id);
            $createMenu->menuGuide()->associate($createMenuGuide->id);

            if ($createMenu->save()) {
                $total->getTotalMenuForDay($createMenu->id);
                return $createMenu->id;
            }

        }
    }

}