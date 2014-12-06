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
	public function __construct()
    {
        $this->beforeFilter('auth', array('only' => 'getProfile'));
        $this->beforeFilter('csrf', array('on' => 'post'));
    }

	public function getIndex()	{
		return Redirect::to('account/profile');
	}
	
    public function getProfile() {
        return View::make('account.profile');
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
			$user->confirmed = md5(uniqid(mt_rand()));
			$user->save();


			$targetEmail = $user->email;
			$name = $user->username;
			$token = $user->confirmed;
			$data = array('email' => $targetEmail, 'token' => $token);

			Mail::queue('emails.confirm', $data, function($message) use ($targetEmail)
	        {
	            $message->to($targetEmail)->subject('Little Helpers: Confirm Registration');
	        });

			return Redirect::to('account/signin')
				->withMessage(array('type' => 'success', 'message' => 'Account created. Please check your email for a confirmation link.'));
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

		
		if(Auth::attempt(array('username' => $name, 'password' => $password))) {
			$user = Auth::user();
			if(!$user->isConfirmed()) {
				$id = Auth::user()->id;
				Auth::logout();
				return View::make('account/signin')->withId($id)
				->withMessage(array('type' => 'danger', 'message' => 'Your account has not been confirmed. Please check your email for a confirmation link.'));
			}
			else {
				return Redirect::to('account/profile');
			}
		}

		return Redirect::to('account/signin')
				->withMessage(array('type' => 'danger', 'message' => 'Your username/password combination was incorrect.'));
	}
	
	public function postResend() {
		$id = Input::get('id');
		$user = User::find($id);
		
		$targetEmail = $user->email;
		$name = $user->username;
		$token = $user->confirmed;
		$data = array('email' => $targetEmail, 'token' => $token);

		Mail::queue('emails.confirm', $data, function($message) use ($targetEmail)
		{
			$message->to($targetEmail)->subject('Little Helpers: Confirm Registration');
		});
		
		return Response::json('Re-sending confirmation email.', 200);
	}

	public function getSignout() {
		Auth::logout();
		return Redirect::to('account/signin')
			->withMessage(array('type' => 'success', 'message' => 'You have been successfully signed out.'));
	}

	public function getConfirm($token) {
		$email = Input::get('email');
		$user = User::where('email', '=', $email)->first();
		echo $token.'<br>';

		if($user) {
			if(!$user->isConfirmed()) {
				if($user->confirmed == $token) {
					$user->confirmed = 1;
            		$user->save();
            		return Redirect::to('account/signin')
						->withMessage(array('type' => 'success', 'message' => 'Account confirmed! You can now sign in.'));
				} else {
					return Redirect::to('account/signin')
						->withMessage(array('type' => 'danger', 'message' => 'Invalid token. Please make sure the confirmation link is valid.'));
				}
			} else {
				return Redirect::to('account/signin')
					->withMessage(array('type' => 'success', 'message' => 'Account has already been confirmed.'));
			}
		} else {
			return Redirect::to('account/signin')
					->withMessage(array('type' => 'danger', 'message' => 'Could not find the associated account. Please make sure the confirmation link is valid.'));
		}
	}

	public function getReset() {
		return View::make('account.reset');
	}

	public function postReset() {
		$validator = Validator::make(Input::all(), array('email' => 'email|required'));

		if($validator->passes()) {
			$user = User::where('email', '=', Input::get('email'))->first();
			if($user) {

				$reset = new Reset;
				$reset->token = md5(uniqid(mt_rand()));
				$reset->user_id = $user->id;
				$reset->save();

				$email = $user->email;
				$name = $user->username;
				$token = $reset->token;
				$data = array('email' => $email, 'name' => $name, 'token' => $token);

				Mail::queue('emails.reset', $data, function($message) use ($email)
		        {
		            $message->to($email)->subject('Little Helpers: Password Reset');
		        });

				return View::make('account.reset')
						->withMessage(array('type' => 'info', 'message' => 'An email with instructions on resetting your email has been sent.'));
			}
			return View::make('account.resend')
					->withMessage(array('type' => 'danger', 'message' => 'There does not exist and account associated with that email.'));
		}

		return View::make('account.reset')
				->withMessage(array('type' => 'danger', 'message' => 'Invalid email. Please correct the following errors'))
				->withErrors($validator);
	}

	public function getResetPassword($token) {
		$reset = Reset::where('token', '=', $token)->first();

		if($reset) {
			return View::make('account.resetpassword')->withId($reset->user_id)->withToken($token);
		}

		return Redirect::to('account/reset')
			->withMessage(array('type' => 'danger', 'message' => 'The password reset request was not found or the token has expired. Please submit a new request.'));
	}

	public function postResetPassword() {
		$validator = Validator::make(Input::all(), array('id' => 'required', 'token' => 'required', 'password' => 'required|alpha_num|min:6|confirmed'));

		if($validator->passes()) {
			$user = User::find(Input::get('id'));
			if($user) {
				$user->password = Hash::make(Input::get('password'));
				$user->save();
				return Redirect::to('account/signin')
					->withMessage(array('type' => 'success', 'message' => 'Your password has been reset. Please login with your new password.'));
			}
			return Redirect::to('/')->withMessage(array('type' => 'danger', 'message' => 'There was an error resetting the password password.'));

		}
		return Redirect::to('/')->withMessage(array('type' => 'danger', 'message' => 'There was an error resetting the password password.'));
	}
}
