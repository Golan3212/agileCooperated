<?php

namespace App\Http\Controllers\Parsers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\Contracts\Parser;
use App\Http\Controllers\Controller;

class RecipeParserController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, Parser $parse)
    {
        $data = $parse->saveParserRecipesData();
        return \redirect()->route('recipes');
    }
}
