<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\Comment\CreateRequest;

class CommentController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     * @param CreateRequest $request
     * @return RedirectResponse
     */
    public function store(CreateRequest $request ): RedirectResponse
    {
        $recipe_id = $request->recipe_id;
        $validated = $request->validated();
        $validated['name'] = Auth::user()->name;
        $comment = new Comment ($validated);

        $comment->save();
        return redirect()->route('recipe', ['id' => $recipe_id]);
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
