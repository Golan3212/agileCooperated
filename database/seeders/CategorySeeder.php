<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class  CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run():void
    {
        DB::table('categories')->insert($this->getData());
    }


    public function getData():array
    {

        $data = [];
        $category = ['завтрак', 'обед', 'перекус', 'ужин'];
        for ($i = 1; $i <= count($category); $i++){
                $data[] =
                    [
                        'title'=> $category[$i-1],
                    ];
            }
        return $data;
    }
}
