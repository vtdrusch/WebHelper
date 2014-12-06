<?php

class Album extends Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'albums';

	public static $rules = array(
	);

	public function uploads() {
		return $this->hasMany('Upload');
	}

}
