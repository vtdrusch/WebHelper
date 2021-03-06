<?php

class ExampleTest extends TestCase {

	/**
	 * A basic functional test example.
	 *
	 * @return void
	 */
	public function testBasicExample()
	{
		$crawler = $this->client->request('GET', '/');

		$this->assertTrue($this->client->getResponse()->isOk());
	}
	
	//Tests the home page is reachable
	public function testHomePage()
	{
		$crawler = $this->client->request('GET', '/');

		$this->assertTrue($this->client->getResponse()->isOk());
	}
	
	//Tests the root is returning the home page
	public function testHomeView()
	{
		$response = $this->call('GET', '/');
		$view = $response->original;
		
		$this->assertEquals('home.index', $view['name']);
	}
	
	//Tests account signin post works
	public function testSignin()
	{
		$crawler = $this->client->request('post', 'account/signin');

		$this->assertTrue($this->client->getResponse()->isOk());
	}
	
	//Tests account signup post works
	public function testSignup()
	{
		$crawler = $this->client->request('post', 'account/sigup');

		$this->assertTrue($this->client->getResponse()->isOk());
	}

}
