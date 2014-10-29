<?php

class AdminController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Admin Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::controller('admin', 'AdminController');
	|
	*/
	public function __construct()
    {
        $this->beforeFilter('auth', array('on' => array('get', 'post', 'show')));
        $this->beforeFilter('admin', array('on' => array('get', 'post', 'show')));

        $this->beforeFilter('csrf', array('on' => 'post'));

        //$this->afterFilter('log', array('only' => array('fooAction', 'barAction')));
    }

	public function getIndex()	{
		$categories = Category::with('resources')->get();
		return View::make('admin.index')->withCategories($categories);
	}

	public function postCategory() {
		$validator = Validator::make(Input::all(), Category::$rules);
		if ($validator->passes()) {
			// create DB entry
			$category = new Category;
			$category->title = Input::get('title');
			$category->category = Input::get('category');
			$category->save();
			return Redirect::to('admin')
					->withMessage(array('type' => 'success', 'message' => 'Group created!'));
		}
		return Redirect::to('admin')
				->withMessage(array('type' => 'danger', 'message' => 'Failed to create group. Please correct the following errors.'))
				->withErrors($validator)->withInput(Input::all());
	}

	public function postResource() {
		$validator = Validator::make(Input::all(), Resource::$rules);
		if ($validator->passes()) {
			// create DB entry
			$resource = new Resource;
			$resource->title = Input::get('title');
			$resource->url = Input::get('url');
			$resource->category_id = Input::get('category_id');
			$resource->description = Input::get('description');
			$resource->save();
			return Redirect::to('admin')
					->withMessage(array('type' => 'success', 'message' => 'Resource created!'));
		}
		return Redirect::to('admin')
				->withMessage(array('type' => 'danger', 'message' => 'Failed to create resource. Please correct the following errors.'))
				->withErrors($validator)->withInput(Input::all());
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
