<?php

namespace App\Http\Controllers;

use App\QueryBuilders\AccountQueryBuilder;
use App\QueryBuilders\MenuWeekQueryBuilder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AccountController extends Controller
{

    public function index (AccountQueryBuilder $accountQueryBuilder)
    {
        Auth::attempt(['email' => 'email@mail.ru', 'password' => 'password']); //чтобы польователь был зарегистрирован, когда появится регистрацию убрать
        // когда регистрация убрать


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
