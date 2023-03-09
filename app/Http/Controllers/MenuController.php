<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\QueryBuilders\MenuQueryBuilder;

class MenuController extends Controller
{
    public function index()
    {
        $data = new MenuQueryBuilder();
        $data = $data->getOne(1);
        $menu = [];

        foreach ($data as $key => $value) {
            dd($value);
            $menu[] = [
                'name' => $value->name,
                'id' => $value->id,
                'category' => $value->breakfest->title,
            ];
        }

        return Inertia::render('Home', [
            'menu' => $menu,
        ]);
    }
}
