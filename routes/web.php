<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\UserController;
use \App\Http\Controllers\FormController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\ExampleController;
use App\Http\Controllers\Page\HomeController;
use App\Http\Controllers\Page\UsersAuthController;
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



Route::get('/', function () {
    return view('app');
});

// Этот роут необходим потому что запрос в первую очередь обрабатывается веб сервером и реакт эти роуты не видит

Route::get('/recipe', function () {
   return view('index');
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
Route::get('/recipe', [RecipeController::class, 'show']);

Route::get('/parser/recipe', RecipeParserController::class)->name('parser.recipe');

Route::get('/menu', [MenuController::class, 'index']);


// Route::get('/*', function () {
//     return view('app');
// });

// //Роуты для формы
// Route::get('/api/form', [FormController::class, 'index']);
// Route::get('/form', [FormController::class, 'index']);

