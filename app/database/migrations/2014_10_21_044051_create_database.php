<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDatabase extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		if(!Schema::hasTable('users')) {
			Schema::create('users', function($table)
			{
				$table->increments('id');		
				$table->string('username')->unique();
				$table->string('email')->unique();
				$table->char('password', '64');
				$table->char('confirmed', '32')->default('0');
				$table->rememberToken();
				$table->timestamps();
			});
		}
		if(!Schema::hasTable('roles')) {
			Schema::create('roles', function($table)
			{
				$table->increments('id');
				$table->string('role');
			});
		}

		if(!Schema::hasTable('role_user')) {
			Schema::create('role_user', function ($table) {
	            $table->integer('user_id')->unsigned();
	            $table->integer('role_id')->unsigned();
	            $table->foreign('user_id')->references('id')->on('users');
	            $table->foreign('role_id')->references('id')->on('roles');
	        });
		}
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('role_user');
		Schema::dropIfExists('users');
		Schema::dropIfExists('roles');
	}

}
