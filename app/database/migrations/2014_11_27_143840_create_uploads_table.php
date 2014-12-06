<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUploadsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		if(!Schema::hasTable('albums')) {
			Schema::create('albums', function($table)
			{
				$table->increments('id');
				$table->string('name');
				$table->boolean('private')->default(0);
				$table->integer('user_id')->unsigned();
				$table->foreign('user_id')->references('id')->on('users');
				$table->timestamps();
			});
		}

		if(!Schema::hasTable('uploads')) {
			Schema::create('uploads', function($table)
			{
				$table->increments('id');
				$table->string('name');
				$table->string('path');
				$table->boolean('private')->default(0);
				$table->integer('album_id')->unsigned();
				$table->foreign('album_id')->references('id')->on('albums');
				$table->timestamps();
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
		Schema::dropIfExists('uploads');
		Schema::dropIfExists('albums');
	}

}
