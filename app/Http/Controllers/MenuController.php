<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\QueryBuilders\MenuQueryBuilder;

class MenuController extends Controller
{
    public function index(MenuQueryBuilder $menuQueryBuilder)
    {
//Здесь как вариант будет доступ к меню на один день.
//        return Inertia::render('Menu');
    }
}
