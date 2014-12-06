<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateForumTables extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		if(!Schema::hasTable('categories')) {
			Schema::create('categories', function($table)
			{
				$table->increments('id');
				$table->string('title');
				$table->string('category')->unique();
				$table->text('description');
				$table->timestamps();
			});
		}

		if(!Schema::hasTable('topics')) {
			Schema::create('topics', function($table)
			{
				$table->increments('id');
				$table->string('subject');
				$table->integer('user_id')->unsigned();
				$table->integer('category_id')->unsigned();
				$table->timestamps();

				$table->foreign('user_id')->references('id')->on('users');
				$table->foreign('category_id')->references('id')->on('categories');
			});
		}

		if(!Schema::hasTable('posts')) {
			Schema::create('posts', function($table)
			{
				$table->increments('id');
				$table->text('content');
				$table->integer('user_id')->unsigned();
				$table->integer('topic_id')->unsigned();
				$table->timestamps();

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
		Schema::dropIfExists('posts');
		Schema::dropIfExists('topics');
		Schema::dropIfExists('categories');
	}

}
