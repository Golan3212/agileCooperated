<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AccountController extends Controller
{
    public function index()
    {
        return Inertia::render('PersonalAccount');
    }

    public function show()
    {
        return Inertia::render('Home');
    }
}
