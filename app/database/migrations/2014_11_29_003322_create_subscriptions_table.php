<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSubscriptionsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		if(!Schema::hasTable('user_subscription')) {
			Schema::create('user_subscription', function($table)
			{
				$table->integer('user_id')->unsigned();
				$table->integer('subscription_id')->unsigned();
				$table->foreign('user_id')->references('id')->on('users');
				$table->foreign('subscription_id')->references('id')->on('users');
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
		Schema::dropIfExists('user_subscription');
	}

}
