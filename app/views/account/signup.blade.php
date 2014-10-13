@extends('layouts.master')

@section('title', 'Signup @ LITTLEHelpers')

@section('head')
@stop

@section('content')
<!-- CONTENT ================================================== -->
<div class="container">
  <div class="row">
    <!-- horizontally center content -->
    <!-- SIGN IN
    ================================================== -->
    <div class="col-md-6 col-md-offset-3">
      <div class="panel panel-default">
        <h2>Join Little Helper today</h2>
        {{ Form::open(array('url' => 'account/signup')) }}
          <p class="input-group">
            <span class="input-group-addon">User Name</span>
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
            <button type="submit" class="btn btn-primary btn-md">
               Create My Account
            </button>
          </p>
        {{ Form::close() }}
      </div>
    </div>
  </div>
</div>
@stop

@section('scripts')
@stop


