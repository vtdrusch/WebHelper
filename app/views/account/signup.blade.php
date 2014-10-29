@extends('layouts.master')

@section('title', 'Signup @ LITTLEHelpers')

@section('head')
@stop

@section('content')
<!-- CONTENT ================================================== -->
<div class="container">
  <div class="row">
    <div class="col-md-10 col-md-offset-1">
      @if(isset($message))
        <div role="alert" class="alert alert-{{$message['type']}} fade in">
          <h4>{{$message['message']}}</h4>
          <div class="form-group" style="text-align:left">
            <ul> 
              @foreach($errors->all() as $error)
                 <li>{{ $error }}</li>
              @endforeach
            </ul>
          </div>
        </div>
      @endif
    </div>
  </div>
  <div class="row">
    <!-- horizontally center content -->
    <!-- SIGN UP ================================================== -->
    <div class="col-md-6 col-md-offset-3">
      <div class="panel panel-default">
        <h2>Join Little Helper today</h2>
        {{ Form::open(array('url' => 'account/signup')) }}
          <p class="input-group">
            <span class="input-group-addon">Username</span>
            <input type="text" class="form-control intput-lg" name="username" placeholder="" />
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


