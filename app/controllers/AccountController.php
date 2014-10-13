<?php

class AccountController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Account Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/account', 'AccountController@showWelcome');
	|
	*/

	public function getIndex()	{
		return View::make('home.index');
	}
	
	public function getSignup() {
		return View::make('account.signup');
	}
	
	public function postSignup() {
		return View::make('account.signup');
	}
	
}
