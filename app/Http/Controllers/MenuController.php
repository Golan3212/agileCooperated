<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\QueryBuilders\MenuQueryBuilder;

class MenuController extends Controller
{
    public function index(MenuQueryBuilder $menuQueryBuilder)
    {
//        $menuList = $menuQueryBuilder->getAll();
//
//        $menu = [];
//        foreach ($menuList as $key => $item) {
//            $menu[] = [
//                'id' => $item->id,
//                'name' => $item->name,
//                'breakfest' => $item->breakfest->title,
//                'dinner' => $item->dinner->title,
//                'lunch' => $item->lunch->title,
//                'firstSnack' => $item->dinner->title,
//            ];
//        }

        ;

        return Inertia::render('Test', [
//            'menu' => $menu
        ]);
    }
}
