<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class User extends Eloquent implements UserInterface, RemindableInterface {

	use UserTrait, RemindableTrait;

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = array('password', 'remember_token');

	public static $rules = array(
		'username'=>'unique:users|min:3|required',
		'email'=>'unique:users|email|required',
		'password'=>'required|alpha_num|min:6|confirmed'
	);

	public function albums() {
		return $this->hasMany('Album');
	}

	public function roles() {
		return $this->belongsToMany('Role');
	}

	public function posts() {
		return $this->hasMany('Post');
	}

	public function topics() {
		return $this->hasMany('Topic');
	}

	public function isAdmin() {
		$roles = $this->roles->toArray();
		return in_array('admin', array_fetch($roles, 'role'));
	}

	public function isConfirmed() {
		return $this->confirmed == 1;
	}

	public function resources() {
		return $this->belongsToMany('Resource');
	}

	public function subscriptions() {
		return $this->belongsToMany('Topic');
	}

	public function uploads() {
		return $this->hasManyThrough('Upload', 'Album');
	}

	
	public function kids() {
		return $this->hasMany('Kid');
	}

}
