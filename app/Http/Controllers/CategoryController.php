<?php

namespace App\Http\Controllers;


use App\Models\Recipe;
use App\QueryBuilders\CategoryQueryBuilder;
use Illuminate\Contracts\View\View;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    /**
     * @return Response
     */
    public function index(CategoryQueryBuilder $categoryQueryBuilder)
    {

        return Inertia::render('Categories', [
            'categories' => $categoryQueryBuilder->getAll()
        ]);
    }

    public function show ()
    {
        return Inertia::render('Recipe');
    }

    public function send ()
    {
        return \view();
    }
}