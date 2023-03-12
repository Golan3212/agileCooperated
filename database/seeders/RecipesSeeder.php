<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class  RecipesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run():void
    {
        DB::table('recipes')->insert($this->getData());
    }


    public function getData():array
    {

        $data = [];
        $quantityRecipes = 40;
        $maxQuantityCategory = DB::table('categories')->max('id');
        for ($i = 1; $i <= $maxQuantityCategory; $i++){
            for ($k = 1; $k <= $quantityRecipes; $k++) {
                $data[] =
                    [
                        'title'=> \fake()->jobTitle(),
                        'image'=> "../../../public/assets/recipe_image/images/62c30bce0f146.jpg",
                        'calorie' => random_int(1, 1000),
                        'fats' => random_int(1, 1000),
                        'proteins' => random_int(1, 1000),
                        'carbohydrates' => random_int(1, 1000),
//                        'portion' => random_int(1, 5),
                        'cooking_time' => random_int(4, 60),
                        'category_id' => random_int(1, $maxQuantityCategory),
                        'created_at'=> \now(),
                        'updated_at'=> \now()
                    ];
            }
        }
        return $data;
    }
}
