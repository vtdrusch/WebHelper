<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateResourcesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		if(!Schema::hasTable('groups')) {
			Schema::create('groups', function($table)
			{
				$table->increments('id');
				$table->string('title');
				$table->string('category');
				$table->timestamps();
			});
		}

		if(!Schema::hasTable('resources')) {
			Schema::create('resources', function($table)
			{
				$table->increments('id');
				$table->string('title');
				$table->string('url');
				$table->text('description');
				$table->integer('favorites')->unsigned()->default(0);
				$table->integer('group_id')->unsigned();
				$table->foreign('group_id')->references('id')->on('groups');
				$table->timestamps();
			});
		}
		if(!Schema::hasTable('resource_user')) {
			Schema::create('resource_user', function($table)
			{
				$table->integer('user_id')->unsigned();
				$table->integer('resource_id')->unsigned();
	            $table->foreign('user_id')->references('id')->on('users');
	            $table->foreign('resource_id')->references('id')->on('resources');
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
		Schema::dropIfExists('resource_user');
		Schema::dropIfExists('resources');
		Schema::dropIfExists('groups');
	}

}
