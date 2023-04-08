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

        if (!$profilesQueryBuilder->getByUserIdLast(\Auth::id())) {

            return \redirect()->route('form');

        }

        $profile = $profilesQueryBuilder->getByUserIdLast(\Auth::id());
//        dd (Auth::id());
        return Inertia::render('Advice', [
            'profile' => $profile->toArray(),
        ]);
    }

    public function account(ProfilesQueryBuilder $profilesQueryBuilder)
    {

        if (!Auth::check()) {
            return \redirect()->route('home');
        }

        if (!$profilesQueryBuilder->getByUserIdLast(\Auth::id())) {

            return \redirect()->route('form');

        }

        $profileList = $profilesQueryBuilder->getByUserIdLast(\Auth::id());
        $user[] = [
            'id' => $profileList->id,
            'gender' => $profileList->gender,
            'age' => $profileList->age,
            'weight' => $profileList->weight,
            'height' => $profileList->height,
            'quotient' => $profileList->quotient,
            'target' => $profileList->target,
            'user' => $profileList->user->toArray(),
            'menuWeek_id' => $profileList->user->menuWeek->value('id'),
        ];

        return Inertia::render('PersonalAccount', [
            'user' => $user,
        ]);
    }

}

