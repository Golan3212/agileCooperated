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
                $data[] =
                    [
                        'recipes_id' => $i,
<<<<<<< Updated upstream
=======
//                        'recipes_category_id'=> DB::table('recipes')->where('id', '=', $i)
//                            ->value('category_id'),
>>>>>>> Stashed changes
                        'ingredients_id'=> random_int(1, $ingredients)
                    ];
            }
        return $data;
    }
}
