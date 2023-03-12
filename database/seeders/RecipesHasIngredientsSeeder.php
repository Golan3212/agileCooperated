<?php

namespace Database\Seeders;

use App\Enums\MassUnit;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class  RecipesHasIngredientsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run():void
    {
        DB::table('recipes_has_ingredients')->insert($this->getData());
    }


    public function getData():array
    {
        $recipesQuantity = DB::table('recipes')->count('id');
        $ingredients = DB::table('ingredients')->count('id');

        $data = [];
        for ($i = 1; $i <= $recipesQuantity; $i++){
            $countIngredients = random_int(5, 10);
            for ($k = 1; $k <= $countIngredients; $k++){
                $data[] =
                    [
                        'recipes_id' => $i,
                        'ingredients_id'=> $k
                    ];
            }
        }
        return $data;
    }
}
