<?php

class Post extends Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'posts';

	public static $rules = array(
		'content' => 'required',
	);

	public function topic() {
		return $this->belongsTo('Topic');
	}

	public function user() {
		return $this->belongsTo('User');
	}

}
