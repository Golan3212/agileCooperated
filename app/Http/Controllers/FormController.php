<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\ProfileUser;
use App\Models\ProgressUser;
use Illuminate\Http\Request;
use App\Services\ConstructorService;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\ProfileRequest;
use Illuminate\Support\Facades\Redirect;
use App\QueryBuilders\ProfilesQueryBuilder;

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
    public function store(ProfileRequest $request, ProfilesQueryBuilder $profilesQueryBuilder, ConstructorService $constructor)
    {
        // Auth::attempt(['email' => 'email@mail.ru', 'password' => 'password']); //чтобы польователь был зарегистрирован, когда появится регистрацию убрать
        // Вы должны создать пользователя в бд


        if(Auth::check()){

             $gender = $request->validated('gender');
             $weight = $request->validated('weight');
             $height = $request->validated('height');
             $age = $request->validated('age');
             $quotient = $request->validated('quotient');
             $target = $request->validated('target');


            $calories = $profilesQueryBuilder->getCaloricNorm($gender, $age, $height, $weight);
            $kbzuNormaArray = $profilesQueryBuilder->getKbzuNorm($target, $calories);
            $bodyMassIndex = $profilesQueryBuilder->getBodyMassIndex($weight, $height);

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

            $arguments = array_merge($request->validated(), $otherProfuleColumn);


            if ($profilesQueryBuilder->getByUserId(\Auth::id())->count()) {//если профиль уже создан

               $profile = $profilesQueryBuilder->updateByUserId(\Auth::id());
               $profile->update($arguments);

           }else{
            $profile = new ProfileUser($arguments); //Марк 2.04.2023 закоментировал для того
            // чтобы данные пользователя записывались в новую строку, а не перезаписывали старую
                $profile->user()->associate(\Auth::id());
                $profile->save();
           }

           $progress = new ProgressUser([
               'weight_progress' => $profile->first()->weight,
               'calories_progress' => $profile->first()->caloric_norm,
            ]);

            $progress->profile()->associate($profile->first()->id);
            if ($progress->save()) {
                $constructor->constructor();
                return \redirect()->route('advice');
            }


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
