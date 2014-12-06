<?php

class UserController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| User Controller
	|--------------------------------------------------------------------------
	|
	|	Handles requests having to do with a user
	|
	|	Route::contoller('user', 'UserController');
	|
	*/

	public function getIndex()	{
		return View::make('home.index');
	}

	public function postUploadProfile() {
		$user = Auth::user();
		$file = Input::file('file');
		$path = '/uploads/'.$user->username.'/';

		$dir = public_path().$path;
		// Create directory if it does not exist
		if(!File::exists($dir)) {
			File::makeDirectory($dir, $mode = 0777, true, true);
		}

		// Upload each file to the directory and store a record in the db
		// foreach($files as $f) {
		// 	$file = new Upload;
		// 	$filename = str_random(12);

		// 	$upload_success = Input::file('file')->move($destinationPath, $filename);
		// }

		$ext = $file->getClientOriginalExtension();
		$filename = str_random(12).'.'.$ext;
		$user->profile = $path.$filename;
		

		$upload_success = $file->move($dir, $filename);

		if( $upload_success ) {
			$thumbnail = Image::make($dir.$filename)->fit(180, 180);
			$thumbnail->save($dir.$filename);
			$user->save();
			return Response::json('success', 200);
		} else {
			return Response::json('error', 400);
		}
	}

	public function postUpload() {
		$user = Auth::user();
		$file = Input::file('file');
		$path = '/uploads/'.$user->username.'/';
		$tpath = $path.'thumbnails/';
		$album = $user->albums()->where('name', '=', 'Uncategorized')->first();

		// Create default album
		if(!$album) {
			$album = new Album;
			$album->name = 'Uncategorized';
			$album->user_id = $user->id;
			$album->save();
		}

		$dir = public_path().$path;
		$tdir = public_path().$tpath;
		// Create directory if it does not exist
		if(!File::exists($dir)) {
			File::makeDirectory($dir, $mode = 0777, true, true);
		}

		if(!File::exists($tdir)) {
			File::makeDirectory($tdir, $mode = 0777, true, true);	
		}

		// Upload each file to the directory and store a record in the db
		// foreach($files as $f) {
		// 	$file = new Upload;
		// 	$filename = str_random(12);

		// 	$upload_success = Input::file('file')->move($destinationPath, $filename);
		// }

		$upload = new Upload;
		$ext = $file->getClientOriginalExtension();
		$filename = str_random(12).'.'.$ext;
		$upload->name = $file->getClientOriginalName();
		$upload->path = $filename;
		$upload->album_id = $album->id;
		

		$upload_success = $file->move($dir, $filename);

		if( $upload_success ) {
			$thumbnail = Image::make($dir.$filename)->fit(250, 150);
			$thumbnail->save($tdir.$filename);
			$upload->save();
			return Response::json($upload->id, 200);
		} else {
			return Response::json('upload-failed', 400);
		}
	}

	public function postDeleteUpload() {
		$id = Input::get('id');
		$upload = Upload::find($id);

		if($upload) {
			$dir = public_path().'/uploads/'.Auth::user()->username.'/'.$upload->path;
			$tdir = public_path().'/uploads/'.Auth::user()->username.'/thumbnails/'.$upload->path;
			if(File::delete($dir)) {
				File::delete($tdir);
				$upload->delete();
				return Response::json('success', 200);
			}
			else {
				return Response::json('error', 400);
			}
		}

		return Response::json('error', 400);

	}
	
	public function postSubscribe() {
		$id = Input::get('id');
		$user = Auth::user();
		$icon;
		$message;
		
		if($user->subscriptions->contains($id)) {
			$user->subscriptions()->detach($id);
			$icon = "fa-heart-o";
			$message = "Subscribe";
		}
		else {
			$user->subscriptions()->attach($id);
			$icon = "fa-heart";
			$message = "Subscribed";
		}
		
		return Response::json(array('i' => $icon, 'm' => $message));
	}
    
   public function postKid() {
      	$validator = Validator::make(Input::all(), Kid::$rules);
		if($validator->passes()) {
			// create DB entry
        	$kid = new Kid;
			$kid->name = Input::get('name');
			$kid->age = Input::get('age');
			$kid->need = Input::get('need');
          	$kid->about = Input::get('about');
        	$kid->user_id = Auth::user()->id;
        	$kid->save();
        	return Response::json($kid->toArray(), 200);
       }
       else {
            return Response::json('error', 400);        
       }
   }

   public function postRemoveKid() {

   		$kid = Kid::find(Input::get('id'));
		if($kid) {
			// create DB entry
        	$kid->delete();
        	return Response::json('success', 200);
       }
       else {
            return Response::json('error', 400);        
       }
   }

	public function postFavorite() {
		$user = Auth::user();
		$id = Input::get('id');
		$resource = Resource::find($id);
		$class = "" ;
		$count = 0;

		if($user->resources->contains($id)) {
			$user->resources()->detach($id);
			$resource->decrement('favorites');
			$class = "fa-heart-o";
			$count = $resource->favorites;
		}
		else {
			$user->resources()->attach($id);
			$resource->increment('favorites');
			$class = "fa-heart";
			$count = $resource->favorites;
		}

		return Response::json(array('class' => $class, 'count' => $count));
	}

}
