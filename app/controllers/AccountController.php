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
		$validator = Validator::make(Input::all(), User::$rules);
		if ($validator->passes()) {
			// create DB entry
			$user = new User;
			$user->username = Input::get('username');
			$user->email = Input::get('email');
			$user->password = Hash::make(Input::get('password'));
			$user->save();
			return Redirect::to('account/signin')
					->withMessage(array('type' => 'success', 'message' => 'Account created. Please signin with your new account.'));
		}
		return View::make('account.signup')
				->withMessage(array('type' => 'danger', 'message' => 'Failed to create account. Please correct the following errors.'))
				->withErrors($validator)->withInput(Input::all());
		
	}

	public function getSignin() {
		return View::make('account.signin');
	}

	public function postSignin() {
		$name = Input::get('username');
		$password = Input::get('password');

		if (Auth::attempt(array('username'=>$name, 'password'=>$password))) {
			return Redirect::to('home');
		} 
		return Redirect::to('account/signin')
				->withMessage(array('type' => 'danger', 'message' => 'Your username/password combination was incorrect.'));
	}

	public function getSignout() {
		Auth::logout();
		return Redirect::to('account/signin')
			->withMessage(array('type' => 'success', 'message' => 'You have been successfully signed out.'));
	}
	
}
