<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdviceController;
//use App\Http\Controllers\Page\HomeController;
//use App\Http\Controllers\Page\UsersAuthController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\Parsers\RecipeParserController;

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


Route::get('recipes', [RecipeController::class, 'index'])->name('recipes.index');
Route::get('/', [HomeController::class])->name('home');
Route::get('recipe/{id}', [RecipeController::class, 'show']);
Route::get('account', [AccountController::class, 'index']);
// Route::get('/menu', [MenuController::class, 'index']);

 Route::get('/', function () {
     return view('app');
 });
Route::get('/Recipes', [RecipeController::class, 'index']);
Route::get('recipe/{id}', [RecipeController::class, 'show']);
Route::get('PersonalAccount', [UserController::class, 'show']);
Route::get('/form', [FormController::class, 'index']);
Route::get('/MenuBuilder', [MenuController::class, 'index']);
// Route::get('/home', [AccountController::class, 'show']);

//Когда регистрация появиться раскомментировать
// Route::middleware(['auth'])->group(function () {
    Route::resource('form', FormController::class);
    Route::get('/advice', [AdviceController::class, 'index'])->name('advice');
// });


//Route::get('/api/Recipes', [RecipeController::class, 'index']);
//Route::get('/api/recipe', [RecipeController::class, 'show']);


// Route::any('{url}', function(){
//     return view('app');
// })->where('url', '.*');

//Route::get('/Recipes', [RecipeController::class, 'index']);
//Route::get('/recipe/{id}', [RecipeController::class, 'show']);



Route::get('/parser/recipe', RecipeParserController::class)->name('parser.recipe');

//Route::get('/menu', [MenuController::class, 'index']);

// Route::get('/builder', function () {
//     return view('app');
// });

// //Роуты для формы
// Route::get('/api/form', [FormController::class, 'index']);


