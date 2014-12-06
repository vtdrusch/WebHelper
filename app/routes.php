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

Route::get('/', function() {
	if(Auth::check()) {
		return Redirect::to('account/profile');
	}
	return View::make('home.index');
});
Route::get('home', function() {
	return Redirect::to('/');
});
Route::get('about', 'HomeController@getAbout');
Route::get('contact', 'HomeController@getContact');
Route::post('contact', 'HomeController@postContact');

/*
|--------------------------------------------------------------------------
| Controllers
|--------------------------------------------------------------------------
*/

Route::controller('account', 'AccountController');
Route::controller('admin', 'AdminController');
Route::controller('forum', 'ForumController');
Route::controller('resources', 'ResourceController');
Route::controller('user', 'UserController');
Route::controller('test', 'TestController');
