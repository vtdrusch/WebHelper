<?php

class Category extends Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'categories';

	public static $rules = array(
		'title' => 'required',
		'category'=>'unique:categories|required',
		'description'=>'required'
	);

	public function topics() {
		return $this->hasMany('Topic');
	}

}
