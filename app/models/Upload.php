<?php

class Upload extends Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'uploads';

	public static $rules = array(
	);

	public function album() {
		return $this->belongsTo('Album');
	}

}
