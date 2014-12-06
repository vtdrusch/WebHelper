<?php

class ResourceController extends BaseController {

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

	public function getIndex()
	{
		$groups = Group::with('resources');
		$favorites = null;
		if(!Auth::guest()) {
			$favorites = Auth::user()->resources;
		}
		return View::make('resources.index')->withGroups($groups->get())->withFavorites($favorites);
	}
	
}
