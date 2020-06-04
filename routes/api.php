<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
Route::group(['prefix' => 'users'], function () {
    /** Для примера будем пользоваться только post */
    Route::post('all', 'AppController@allUsers');
//    Route::post('user', 'AppController@user');
});
Route::group(['prefix' => 'shops'], function () {
    /** Для примера будем пользоваться только post */
    Route::post('all', 'AppController@allShops'); // правильно было бы создать ShopsController
});
