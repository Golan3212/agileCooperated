<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class  MenuForWeekSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run():void
    {
        DB::table('menu_for_week')->insert($this->getData());
    }


    public function getData():array
    {

        $data = [];
        $maxQuantityMenu = DB::table('menu')->max('id');
        for ($i = 1; $i <= $maxQuantityMenu; $i++){
                $data[] =
                    [
                        'menu_monday_id' => random_int(1, $maxQuantityMenu),
                        'menu_tuesday_id' => random_int(1, $maxQuantityMenu),
                        'menu_wednesday_id' => random_int(1, $maxQuantityMenu),
                        'menu_thursday_id' => random_int(1, $maxQuantityMenu),
//                        'portion' => random_int(1, 5),
                        'menu_friday_id' => random_int(1, $maxQuantityMenu),
                        'menu_saturday_id' => random_int(1, $maxQuantityMenu),
                        'menu_sunday_id' => random_int(1, $maxQuantityMenu),
                        'total_calories' => random_int(1, 500),
                        'created_at'=> \now(),
                        'updated_at'=> \now()
                ];
            }
        return $data;
    }
}
