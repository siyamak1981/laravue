<?php

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

// Route::any('{all}', function () {
    // return view('layouts.master');
// })->where('all', '^((?!(api|broadcast)).)*');


Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('{path}','HomeController@index')->where( 'path', '([A-z]+)?' );


// Route::get('invoice', function(){
//     return view('invoice');
// });

