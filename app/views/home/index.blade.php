@extends('layouts.master')

@section('title', 'LITTLEHelpers')

@section('head')
<style>
 body {
  background: url("{{URL::asset('/assets/img/fingerPainting.jpg')}}") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
@stop

@section('content')
<body class="cover">
<!-- CONTENT ================================================== -->
<div class="container">
  <div class="row">
      <!-- horizontally center content -->
      <div class="col-md-5 col-md-offset-1 ">
        <h1 class="whiteText">Welcome to Little Helpers</h1>
        <h3 class="whiteText">Network with other parents who have kids with special needs. Connect with resources and keep track of your kid's accomplishments </h3>
      </div>

      <!-- SIGN IN ================================================== -->
      <div class="col-md-4 col-md-offset-1">
        <div class="panel panel-default">
          <h2>Sign In</h2>
          {{ Form::open(array('url' => 'account/signin')) }}
            <p class="input-group">
              <span class="input-group-addon"><i class="fa fa-user fa-lg"></i></span>
              <input type="text" class="form-control intput-lg" name="username" placeholder="Username" />
            </p>
            <p class="input-group">
              <span class="input-group-addon"><i class="fa fa-asterisk fa-lg"></i></span>
              <input type="password" class="form-control intput-lg" name="password" placeholder="Password" />
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
              <span class="input-group-addon"><i class="fa fa-user fa-lg"></i></span>
              <input type="text" class="form-control intput-lg" name="username" placeholder="Username" />
            </p>
            <p class="input-group">
              <span class="input-group-addon"><i class="fa fa-envelope fa-lg"></i></span>
              <input type="text" class="form-control intput-lg" name="email" placeholder="Email" />
            </p>
            <p class="input-group">
              <span class="input-group-addon"><i class="fa fa-asterisk fa-lg"></i></span>
              <input type="password" class="form-control intput-lg" name="password" placeholder="Password" />
            </p>
            <p class="input-group">
              <span class="input-group-addon"><i class="fa fa-asterisk fa-lg"></i></span>
              <input type="password" class="form-control intput-lg" name="password_confirmation" placeholder="Confirm Password" />
            </p>
            <p class="text-right">
              <button type="submit" class="btn btn-primary btn-md"> Sign Up </button>
            </p>
          {{ Form::close() }}
        </div>
    </div>
  </div>
</div>
</body>
@stop

@section('scripts')
@stop