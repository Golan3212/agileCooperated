<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\QueryBuilders\UsersQueryBuilder;

class UsersAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(UsersQueryBuilder $usersQueryBuilder)
    {
        $users = $usersQueryBuilder->getAll();
        return Inertia::render('Admin/UsersList', [
            'list' => $users->ToArray()
        ]);
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
    public function store(Request $request, UsersQueryBuilder $usersQueryBuilder)
    {
        $validated = $request->validate([
            'id' => ['integer']
        ]);

        $user = $usersQueryBuilder->getByIdUpdate($validated['id']);

        $user->update(['is_admin' => 1]);

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
    public function destroy(string $id, UsersQueryBuilder $usersQueryBuilder)
    {

        $user = $usersQueryBuilder->getByIdUpdate((int)$id)->first();

        $user->delete();
    }
}
