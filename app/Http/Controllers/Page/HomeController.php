<?php

namespace App\Http\Controllers\Page;

use Inertia\Inertia;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    public function show()
    {
        return Inertia::render('Recipe');
    }
}
