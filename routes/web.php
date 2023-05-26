<?php

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;
use App\Http\Controllers\PostController;
use \App\Http\Controllers\HomeController;
use \App\Http\Controllers\MainController;
use App\Http\Controllers\ChartController;
use App\Http\Controllers\AdviceController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MenuWeekController;
//use App\Http\Controllers\DashboardController;
use \App\Http\Controllers\CategoryController;
use App\Http\Controllers\MenuWeekUpdateController;
use App\Http\Controllers\Admin\IndexAdminController;
use App\Http\Controllers\Admin\UsersAdminController;
use App\Http\Controllers\Admin\RecipesAdminController;
use App\Http\Controllers\Parsers\RecipeParserController;
//use \App\Http\Controllers\Admin\GuestLyoutController as AdminUserController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//
// Route::get('/dashboard',DashboardController::class)->middleware(['auth', 'verified'])->name('dashboard');


//Auth routes
Route::middleware('auth')
    ->group(function () {

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/home',[HomeController::class,'index'])->name('Home');
    });
    //Роут для графика 02.04.2023
    Route::get('/progress',[ChartController::class,'index'])->middleware(['auth'])->name('ProgressChart');

    //Guest routes
Route::middleware('guest')
    ->group(function () {
        //Route::get('/home ', [AdminUserController::class, 'home'])->name('guest.home');
        Route::get('/about', [MainController::class, 'about'])->name('guest.about');
        Route::get('/contact', [MainController::class, 'contact'])->name('guest.contact');
        Route::get('/', [MainController::class, 'index'])->name('Main');
    });

    Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
        return $request->user();
    });

//Test route
Route::get('/posts', [PostController::class, 'index'])->middleware(['auth', 'verified'])->name('posts.index');



//Recipes routes
Route::get('/recipes', [RecipeController::class, 'index'])->middleware(['auth', 'verified'])->name('recipes');
Route::get('/recipe/{id}', [RecipeController::class, 'show'])->middleware(['auth', 'verified'])->name('recipe');
Route::get('/category', [CategoryController::class, 'index'])->middleware(['auth', 'verified'])->name('category');
//


Route::middleware(['auth'])->group(function () {
       // Route::get('account', [AccountController::class, 'index']);
        Route::get('/home',[HomeController::class,'index'])->name('Home');
        Route::get('/advice', [AdviceController::class, 'advice'])->name('advice');
        Route::get('/menu/builder', [MenuWeekController::class, 'index']);
        Route::resource('menu/builder/constructor', MenuWeekUpdateController::class);
        Route::resource('form', FormController::class);
        Route::get('account', [AdviceController::class, 'account'])->name('account');
        Route::resource('comments', CommentController::class);
        Route::get('/main', [MainController::class, 'index'])->name('main');
});
//Админ-панель
Route::middleware(['auth', 'is.admin'])->group(function () {
    Route::prefix('admin')->group(function () {
        Route::resource('users', UsersAdminController::class);
        Route::resource('recipes', RecipesAdminController::class);
        Route::get('/index', IndexAdminController::class);
    });
});

//Parser routes
Route::get('/parser/recipes', RecipeParserController::class)->name('parser.recipe');


// Route::fallback( function() {
//     return Inertia::render('NotFound');
// });


require __DIR__.'/auth.php';

