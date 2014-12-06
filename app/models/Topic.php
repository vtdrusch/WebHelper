<?php

class Topic extends Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'topics';

	public static $rules = array(
		'subject' => 'required',
		'category' => 'required',
		'content' => 'required'
	);

	public function category() {
		return $this->belongsTo('Category');
	}

	public function user() {
		return $this->belongsTo('User');
	}

	public function posts() {
		return $this->hasMany('Post');
	}

}
