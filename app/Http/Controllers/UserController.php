<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    /**
     * Show the profile for a given user.
     */
    public function show():Response
    {
        $user = [
            'name' => 'andrey',
            'email' => 'golanov',
        ];
        return Inertia::render('Recipe', [
            'user' => $user
        ]);
    }
}