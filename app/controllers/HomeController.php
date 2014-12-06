<?php

class HomeController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/

	public function getIndex()	{
		return View::make('home.index');
	}
	
	public function getAbout() {
		return View::make('home.about');
	}
	
	public function getContact() {
		return View::make('home.contact');
	}

	public function postContact() {
		$validator = Validator::make(
			Input::all(),
			array(
				'name' => 'required',
				'email' => 'required|email',
				'issue' => 'required'
			)
		);

		if($validator->passes()) {
			$name = Input::get('name');
			$email = Input::get('email');
			$issue = Input::get('issue');
			$data = array('name' => $name, 'email' => $email, 'issue' => $issue);

			Mail::queue('emails.issues', $data, function($message) use($data)
			{
				$message->from($data['email'], $data['name']);
				$message->to('pandabears-l@mtu.edu')->subject('Little Helpers: New Issue!');
			});
			return View::make('home.contact')
				->withMessage(array('type' => 'success', 'message' => 'Message sent. A member of the team will review your issue and contact you within 24 hrs.'));
		}

		return View::make('home.contact')
				->withMessage(array('type' => 'danger', 'message' => 'Please correct the following errors.'))
				->withErrors($validator)->withInput(Input::all());
		
	}
	
}
