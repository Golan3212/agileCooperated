<?php

namespace App\Http\Controllers;

use Inertia\Inertia;



class MenuController extends Controller
{
    public function index(MenuQueryBuilder $menuQueryBuilder)
    {

        $menu = [];


        return Inertia::render('MenuBuilder', [
            'menu' => $menu,
        ]);
    }
}
