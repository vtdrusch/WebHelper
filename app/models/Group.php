<?php

class Group extends Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'groups';

	public static $rules = array(
		'title'=>'required',
		'category'=>'unique:categories|required'
	);

	public function resources() {
		return $this->hasMany('Resource');
	}	

}
