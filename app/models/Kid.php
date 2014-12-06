<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class Kid extends Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'kids';
	public $timestamps = false;


	public static $rules = array(
		'name' => 'required',
		'age' => 'required|numeric',
		'need' => 'required'
	);
	

	public function user() {
		return $this->belongsTo('User');
	}


}
