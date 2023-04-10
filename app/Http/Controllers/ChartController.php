<?php

namespace App\Http\Controllers;

use App\Models\ProfileUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ChartController extends Controller
{
    public function index()
    {
        $id = Auth::id();

        $profileuser = ProfileUser::query()->where('user_id',$id)->get();

        return Inertia::render('ProgressChart')->with('profileuser',$profileuser);

    }

}
