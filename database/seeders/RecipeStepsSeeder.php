<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class  RecipeStepsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run():void
    {
        DB::table('recipe_steps')->insert($this->getData());
    }


    public function getData():array
    {
        $data = [];
        $maxQuantityRecipes = DB::table('recipes')->max('id');
        for ($i = 1; $i <= $maxQuantityRecipes; $i++){
            $quantityRecipeSteps = random_int(4, 9);
            for ($k = 1; $k <= $quantityRecipeSteps; $k++) {
                $data[] =
                    [
                        'description'=> \fake()->text(),
                        'recipe_id' => $i,
                        'step_number' => $k,
                        'created_at'=> \now(),
                        'updated_at'=> \now()
                    ];
            }
        }
        return $data;
    }
}
