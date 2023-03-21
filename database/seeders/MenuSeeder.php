<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class  MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run():void
    {
        DB::table('menu')->insert($this->getData());
    }


    public function getData():array
    {

        $data = [];
        $maxQuantityRecipes = DB::table('recipes')->max('id');
        for ($i = 1; $i <= $maxQuantityRecipes; $i++){
                $data[] =
                    [
                        'name'=> \fake()->jobTitle(),
                        'breakfest_id' => random_int(1, $maxQuantityRecipes),
                        'dinner_id' => random_int(1, $maxQuantityRecipes),
                        'lunch_id' => random_int(1, $maxQuantityRecipes),
                        'first_snack_id' => random_int(1, $maxQuantityRecipes),
//                        'portion' => random_int(1, 5),
                        'second_snack_id' => random_int(1, $maxQuantityRecipes),
                        'total_calories' => random_int(1, 2000),
                        'total_proteins' => random_int(1, 500),
                        'total_fats' => random_int(1, 500),
                        'total_carboh_ydrates' => random_int(1, 500),
                        'created_at'=> \now(),
                        'updated_at'=> \now()
                ];
            }
        return $data;
    }
}
