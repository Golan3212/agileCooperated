<?php

namespace Database\Seeders;

use App\Enums\MassUnit;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class  IngredientsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run():void
    {
        DB::table('ingredients')->insert($this->getData());
    }


    public function getData():array
    {

        $data = [];
        for ($i = 1; $i <= 40; $i++){
                $data[] =
                    [
                        'title'=> \fake()->text(30),
                        'created_at'=> \now(),
                        'updated_at'=> \now()
                    ];
            }
        return $data;
    }
}
