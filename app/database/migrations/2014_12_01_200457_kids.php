<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Kids extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		if(!Schema::hasTable('kids')) {
			Schema::create('kids', function($table)
			{
				$table->increments('id');			
				$table->string('name');
				$table->integer('age');
				$table->string('need');
				$table->string('about');
                $table->increments('user_id');
				$table->rememberToken();
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
		Schema::dropIfExists('kids');

	}

}
