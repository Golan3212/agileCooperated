<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ExampleController;
use App\Http\Controllers\Page\HomeController;
use App\Http\Controllers\Page\UsersAuthController;

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


// Route::get('/', )->name("home");

Route::get('/', [HomeController::class, "show"])->name('home');
Route::resource('/auth', UsersAuthController::class);

// Этот роут необходим потому что запрос в первую очередь обрабатывается веб сервером и реакт эти роуты не видит

Route::get('/recipe', function () {
    return view('index');
});







