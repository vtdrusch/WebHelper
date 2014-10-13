<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', 'HomeController@getIndex');
Route::get('home', 'HomeController@getIndex');
Route::get('about', 'HomeController@getAbout');
Route::get('contact', 'HomeController@getContact');

/*
|--------------------------------------------------------------------------
| Controllers
|--------------------------------------------------------------------------
*/
Route::controller('account', 'AccountController');
Route::controller('resources', 'ResourceController');
Route::controller('forum', 'ForumController');
