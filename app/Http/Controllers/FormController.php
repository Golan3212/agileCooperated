<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\ProfileUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\ProfileRequest;
use Illuminate\Support\Facades\Redirect;
use App\QueryBuilders\ProfileQueryBuilder;

class FormController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Form');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProfileRequest $request, ProfileQueryBuilder $profileQueryBuilder)
    {
        Auth::attempt(['email' => 'email@mail.ru', 'password' => 'password']); //чтобы польователь был зарегистрирован, когда появится регистрацию убрать
        // Вы должны создать пользователя в бд

        if(Auth::check()){


            $gender = (int)$request->all()[0]['gender'];
            $weight = (int)$request->all()[0]['weight'];
            $height = (int)$request->all()[0]['height'];
            $age = (int)$request->all()[0]['age'];
            $quotient = (float)$request->all()[0]['quotient'];
            $target = (float)$request->all()[0]['target'];

            $calories = $profileQueryBuilder->caloricNorm($gender, $age, $height, $weight);
            $kbzuNormaArray = $profileQueryBuilder->kbzuNorm($target, $calories);
            $bodyMassIndex = $profileQueryBuilder->bodyMassIndex($weight, $height);

            $otherProfuleColumn = [
                'proteins_min' => $kbzuNormaArray['proteins']['min'],
                'proteins_max' => $kbzuNormaArray['proteins']['max'],
                'fats_min' => $kbzuNormaArray['fats']['min'],
                'fats_max' => $kbzuNormaArray['fats']['max'],
                'carbohydrates_min' => $kbzuNormaArray['carbohydrates']['min'],
                'carbohydrates_max' => $kbzuNormaArray['carbohydrates']['max'],
                'mass_index' => $bodyMassIndex,
                'caloric_norm' => $calories,
            ];

            $arguments = array_merge($request->all()[0], $otherProfuleColumn);


            if ($profileQueryBuilder->getByUserId(\Auth::id())->count()) {//если профиль уже создан

                $profile = $profileQueryBuilder->updateByUserId(\Auth::id());
                $profile->update($arguments);

            }else{
                $profile = new ProfileUser($arguments);
                $profile->user()->associate(\Auth::id());
                $profile->save();
            }

            return \redirect()->route('advice');
        }
        // dd($request, Auth::check(), \Auth::id());

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
