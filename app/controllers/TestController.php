<?php

class TestController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Test Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('test', 'TestController@showWelcome');
	|
	*/

	public function getIndex()
	{
		return "TEST";
	}
	
	public function getDbconnection() {
		if(DB::connection()->getDatabaseName())
		{
		   echo "connected sucessfully to database ".DB::connection()->getDatabaseName();
		}
		else
		echo "Cannot connect to database.";
	}

	public function getRandom() {

		$id = uniqid(mt_rand());
		echo $id.'<br>';
		echo md5($id);
	}

	public function getEmail() {
		$name = 'John Doe';
		$email = 'johndoe@example.com';
		$issue = 'Testing contact page';
		$data = array('name' => $name, 'email' => $email, 'issue' => $issue);

		Mail::queue('emails.issues', $data, function($message) use($data)
		{
			$message->from($data['email'], $data['name']);
			$message->to('pandabears-l@mtu.edu')->subject('Little Helpers: New Issue!');
		});

        return View::make('emails.issues')->withName($name)->withEmail($email)->withIssue($issue);
	}

	public function getConfirm() {
		echo Auth::user()->isConfirmed().'<br>';
		echo Auth::user()->confirmed;
	}

	public function getPost() {
		$user = Auth::user();

		$posts = $user->posts;

		foreach($posts as $p) {
			echo $p->id." ".$p->user_id;
		}

	}
	
}
