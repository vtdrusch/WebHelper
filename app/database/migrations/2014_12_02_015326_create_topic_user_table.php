<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTopicUserTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		if(!Schema::hasTable('topic_user')) {
			Schema::create('topic_user', function($table)
			{
				$table->integer('user_id')->unsigned();
				$table->integer('topic_id')->unsigned();
				$table->foreign('user_id')->references('id')->on('users');
				$table->foreign('topic_id')->references('id')->on('topics');
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
		Schema::dropIfExists('topic_user');
	}

}
