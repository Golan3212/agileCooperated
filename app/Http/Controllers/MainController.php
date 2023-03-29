<?php


namespace App\Http\Controllers;


use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class MainController extends Controller
{

    public function index()
    {


        return Inertia::render('Guest/Main', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),

        ]);
    }

    public function about()
    {


        return Inertia::render('Guest/About');
    }

    public function contact()
    {
        return Inertia::render('Guest/Contact', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),

        ]);
    }

    public function home()
    {


        return Inertia::render('Guest/Home', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),

        ]);
    }
}
