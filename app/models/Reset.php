<?php

class Reset extends Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'resets';

	public static $rules = array(
	);

	public function user() {
		return $this->belongsTo('User');
	}

}
