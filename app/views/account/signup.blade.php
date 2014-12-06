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


