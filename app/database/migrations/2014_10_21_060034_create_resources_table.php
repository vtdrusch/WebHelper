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
		if(!Schema::hasTable('categories')) {
			Schema::create('categories', function($table)
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
				$table->integer('category_id')->unsigned();
				$table->foreign('category_id')->references('id')->on('categories');
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
		Schema::dropIfExists('resources');
		Schema::dropIfExists('categories');
	}

}
