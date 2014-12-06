<?php

class ForumController extends BaseController {

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

	public function getIndex() {
		$categories = Category::all();
		$topics = Topic::with('posts', 'user')->get();
		return View::make('forum.index')->withCategories($categories)->withTopics($topics);
	}

	public function getCategory($category) {
		$categories = Category::all();
		$category = Category::where('category', '=', $category)->with('topics.posts', 'topics.user')->first();
		if($category) {
			//$category = $category->with('topics')->where('category', '=', $category->category);
			return View::make('forum.category')->withCategory($category)->withCategories($categories);
		}
		return Redirect::to('forum')
			->withMessage(array('type' => 'danger', 'message' => 'Error, category not found.'));
	}

	public function postNewTopic() {
		$validator = Validator::make(Input::all(), Topic::$rules);

		if($validator->passes()) {
			$user = Auth::user();
			$topic = new Topic;
			$post = new Post;

			$topic->subject = Input::get('subject');
			$topic->user_id = $user->id;
			$topic->category_id = Input::get('category');
			$topic->save();

			$post->content = Input::get('content');
			$post->user_id = $user->id;
			$post->topic_id = $topic->id;
			$post->save();

			return Redirect::back()
				->withMessage(array('type' => 'success', 'message' => 'New topic created.'));
		}

		return Redirect::back()
			->withMessage(array('type' => 'danger', 'message' => 'Failed to create topic. Please correct the following errors.'))
			->withErrors($validator)->withInput(Input::all());
	}

	public function getTopic($id) {
		$topic = Topic::find($id);
		$topic->load('posts');
		if($topic) {
			return View::make('forum.topic')->withTopic($topic);
		}

		return Redirect::back()
			->withMessage(array('type' => 'danger', 'message' => 'Error. Failed to retrive the requested topic.'));

	}

	public function postReply() {
		$validator = Validator::make(Input::all(), Post::$rules);

		if($validator->passes()) {
			$post = new Post;
			$post->content = Input::get('content');
			$post->user_id = Auth::user()->id;
			$post->topic_id = Input::get('topic');
			$post->save();

			return Redirect::back()
				->withMessage(array('type' => 'success', 'message' => 'Reply posted.'));
		}

		return Redirect::back()
			->withMessage(array('type' => 'danger', 'message' => 'Failed to post reply.'))
			->withErrors($validator)->withInput(Input::all());
	}

}
