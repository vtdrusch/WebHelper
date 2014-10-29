<?php

class Resource extends Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'resources';

	public static $rules = array(
		'title'=>'required',
		'url'=>'required',
		'category_id'=>'required'
	);

	public function category() {
		return $this->belongsTo('Category');
	}

}
