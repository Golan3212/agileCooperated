<?php

namespace App\Http\Controllers;

use App\Models\ProfileUser;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ChartController extends Controller
{
    public function index()
    {
        $id = Auth::id();

        $profileuser = ProfileUser::query()->where('user_id',$id)->first();

        if ($profileuser == null){
            return redirect('/form');
        }

        $progress = $profileuser->progress()->get();
        $progressTable = $profileuser->progress()->latest()->get();

        return Inertia::render('ProgressChart')
            ->with('progressUser',$progress)
            ->with('progressTable', $progressTable);
    }

}
