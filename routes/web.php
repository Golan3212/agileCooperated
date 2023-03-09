<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\UserController;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get('/', function () {
    return view('app');
});


Route::get('/', function () {
    return view('app');
});


Route::get('/api/Recipes', [RecipeController::class, 'index']);
Route::get('/api/recipe', [RecipeController::class, 'show']);


Route::any('{url}', function(){
    return view('app');
})->where('url', '.*');

Route::get('/Recipes', [RecipeController::class, 'index']);
Route::get('/recipe/{id}', [RecipeController::class, 'show']);



Route::get('/builder', function () {
    return view('app');
});





