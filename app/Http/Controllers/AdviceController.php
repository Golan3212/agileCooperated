<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\QueryBuilders\ProfilesQueryBuilder;

class AdviceController extends Controller
{
    public function index(ProfilesQueryBuilder $profilesQueryBuilder)
    {
        Auth::attempt(['email' => 'email@mail.ru', 'password' => 'password']); //чтобы польователь был зарегистрирован, когда появится регистрацию убрать
        // когда регистрация убрать



        if (Auth::check()) {
            // return \redirect()->route('home');
        }

        if (!$profilesQueryBuilder->getByUserId(\Auth::id())) {

            return \redirect()->route('form');

        }
        $profile = $profilesQueryBuilder->getByUserId(\Auth::id());
        return Inertia::render('Advice', [
            'profile' => $profile->toArray()[0],
        ]);
    }
}
