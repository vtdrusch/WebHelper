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
	
}
