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
    }

	public function getIndex()	{
		return View::make('admin.index');
	}

	public function getResources() {
		$groups = Group::with('resources')->get();
		return View::make('admin.resources')->withGroups($groups);
	}

	public function getForum() {
		$categories = Category::all();
		return View::make('admin.forum')->withCategories($categories);
	}

	public function postGroup() {
		$validator = Validator::make(Input::all(), Category::$rules);
		if ($validator->passes()) {
			// create DB entry
			$group = new Group;
			$group->title = Input::get('title');
			$group->group = Input::get('group');
			$group->save();
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
			$resource->group_id = Input::get('group_id');
			$resource->description = Input::get('description');
			$resource->save();
			return Redirect::to('admin/resources')
					->withMessage(array('type' => 'success', 'message' => 'Resource created!'));
		}
		return Redirect::to('admin/resources')
				->withMessage(array('type' => 'danger', 'message' => 'Failed to create resource. Please correct the following errors.'))
				->withErrors($validator)->withInput(Input::all());
	}

	public function postCategory() {
		$validator = Validator::make(Input::all(), Category::$rules);
		if ($validator->passes()) {
			// create DB entry
			$category = new Category;
			$category->title = Input::get('title');
			$category->category = Input::get('category');
			$category->description = Input::get('description');
			$category->save();
			return Redirect::to('admin/forum')
					->withMessage(array('type' => 'success', 'message' => 'Category Created.'));
		}
		return Redirect::to('admin/forum')
				->withMessage(array('type' => 'danger', 'message' => 'Failed to create category.'))
				->withErrors($validator)->withInput(Input::all());
	}
	
}
