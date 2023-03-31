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

    public function account(AccountQueryBuilder $accountQueryBuilder)
    {


        if (Auth::check()) {
            // return \redirect()->route('home');
        }

        if (!$accountQueryBuilder->getUserById(\Auth::id())) {

            return \redirect()->route('form');

        }
        $userList = $accountQueryBuilder->getUserById(\Auth::id());

        $user = [];
        foreach ($userList as $key => $item) {
            $user[] = [
                'id' => $item->id,
                'name' => $item->name,
                'username' => $item->username,
                'email' => $item->email,
                'phone' => $item->phone,
                'profile' => $item->profile->toArray(),
                'menuWeek_id' => $item->menuWeek->value('id'),
            ];
        }


        return Inertia::render('PersonalAccount', [
            'user' => $user,

        ]);
    }
}
