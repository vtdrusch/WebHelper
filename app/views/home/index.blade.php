@extends('layouts.master')

@section('title', 'LITTLEHelpers')

@section('head')
<style>
 html {
  background: url("{{URL::asset('/assets/img/fingerPainting.jpg')}}") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
@stop

@section('content')
<!-- CONTENT ================================================== -->
<div class="container">
  <div class="row">
      <!-- horizontally center content -->
      <div class="col-md-5 col-md-offset-1 ">
        <h1 class="whiteText">Welcome to LITTLEhelper</h1>
        <h3 class="whiteText">Network with other parents who have kids with special needs. Connect with resources and keep track of your kid's accomplishments </h3>
      </div>

      <!-- SIGN IN ================================================== -->
      <div class="col-md-4 col-md-offset-1">
        <div class="panel panel-default">
          <h2>Sign In</h2>
           {{ Form::open(array('url' => 'account/signup')) }}
            <p class="input-group">
              <span class="input-group-addon">User name</span>
              <input type="text" class="form-control intput-lg" name="user" placeholder="" />
            </p>
            <p class="input-group">
              <span class="input-group-addon">Password</span>
              <input type="password" class="form-control intput-lg" name="password" placeholder="" />
            </p>
            <p class="text-right">
              <button type="submit" class="btn btn-primary btn-md"> Sign In </button>
            </p>
          {{ Form::close() }}
        </div>
                
        <!-- SIGN UP ================================================== -->
        <div class="panel panel-default margin-base-vertical">
          <h2>New to LITTLEhelper? Sign Up</h2>
           {{ Form::open(array('url' => 'account/signup')) }}
            <p class="input-group">
              <span class="input-group-addon">User name</span>
              <input type="text" class="form-control intput-lg" name="user" placeholder="" />
            </p>
            <p class="input-group">
              <span class="input-group-addon">Email</span>
              <input type="text" class="form-control intput-lg" name="email" placeholder="" />
            </p>
            <p class="input-group">
              <span class="input-group-addon">Password</span>
              <input type="password" class="form-control intput-lg" name="password" placeholder="" />
            </p>
            <p class="input-group">
              <span class="input-group-addon">Confirm Password</span>
              <input type="password" class="form-control intput-lg" name="password_confirmation" placeholder="" />
            </p>
            <p class="text-right">
              <button type="submit" class="btn btn-info btn-md"> Sign Up </button>
            </p>
          {{ Form::close() }}
        </div>
    </div>
  </div>
</div>
@stop

@section('scripts')
@stop