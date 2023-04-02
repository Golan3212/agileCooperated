<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\TotalService;
use Illuminate\Support\Facades\Auth;
use App\QueryBuilders\MenuQueryBuilder;
use App\Services\ResetMenuConstructorService;

class MenuWeekUpdateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(Request $request, ResetMenuConstructorService $resetMenu)
    {
        $menuWeek = Auth::user()->menuWeek()->first();
        $resetMenu->resetMenuById($menuWeek->menu_monday_id);
        $resetMenu->resetMenuById($menuWeek->menu_tuesday_id);
        $resetMenu->resetMenuById($menuWeek->menu_wednesday_id);
        $resetMenu->resetMenuById($menuWeek->menu_thursday_id);
        $resetMenu->resetMenuById($menuWeek->menu_friday_id);
        $resetMenu->resetMenuById($menuWeek->menu_saturday_id);
        $resetMenu->resetMenuById($menuWeek->menu_sunday_id);

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
    public function update(Request $request, MenuQueryBuilder $menu, TotalService $total)
    {
        $validated = $request->validate([
            'menuId' => ['integer'],
            'positionRecipe' => ['integer', 'max:4', 'min:0'],
            'positionMenu' => ['integer', 'max:6', 'min:0'],
            'newRecipeId' => ['integer']
        ]);


        $menu = $menu->getByIdFromUpdate($validated['menuId'])->first();

        switch ($validated['positionRecipe']) {
            case 0:
                $menu->breakfest()->associate($validated['newRecipeId']);
                break;
            case 1:
                $menu->firstSnack()->associate($validated['newRecipeId']);
                break;
            case 2:
                $menu->dinner()->associate($validated['newRecipeId']);
                break;
            case 3:
                $menu->secondSnack()->associate($validated['newRecipeId']);
                break;
            case 4:
                $menu->lunch()->associate($validated['newRecipeId']);
                break;
            default:
                return redirect()->route('home');
                break;
        }

        if ($menu->save()) {
            $total->getTotalMenuForDay($menu->id);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
