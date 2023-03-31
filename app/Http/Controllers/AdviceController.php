<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\QueryBuilders\AccountQueryBuilder;
use App\QueryBuilders\ProfilesQueryBuilder;

class AdviceController extends Controller
{
    public function advice(ProfilesQueryBuilder $profilesQueryBuilder)
    {


        if (!Auth::check()) {
            return \redirect()->route('home');
        }

        if (!$profilesQueryBuilder->getByUserId(\Auth::id())) {

            return \redirect()->route('form');

        }

        $profile = $profilesQueryBuilder->getByUserId(\Auth::id());
//        dd (Auth::id());
        return Inertia::render('Advice', [
            'profile' => $profile->toArray()[0],
        ]);
    }

    public function account(ProfilesQueryBuilder $profilesQueryBuilder)
    {

        if (!Auth::check()) {
            return \redirect()->route('home');
        }

        if (!$profilesQueryBuilder->getByUserId(\Auth::id())) {

            return \redirect()->route('form');

        }

        $profileList = $profilesQueryBuilder->getByUserId(\Auth::id());

        $user = [];
        foreach ($profileList as $key => $item) {
            $user[] = [
                'id' => $item->id,
                'gender' => $item->gender,
                'age' => $item->age,
                'weight' => $item->weight,
                'height' => $item->height,
                'quotient' => $item->quotient,
                'target' => $item->target,
                'user' => $item->user->toArray(),
                'menuWeek_id' => $item->user->menuWeek->value('id'),
            ];
        }

        return Inertia::render('PersonalAccount', [
            'user' => $user,
        ]);
    }

}

