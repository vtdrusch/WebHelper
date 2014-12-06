@extends('layouts.master')

@section('title', 'Reset @ LITTLEHelpers')

@section('head')
@stop

@section('content')
<!-- CONTENT ================================================== -->
<div class="container">
  <div class="row">
    <div class="col-md-10 col-md-offset-1">
      @if(Session::has('message')) <?php $message = Session::get('message') ?> @endif
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
    <!-- SIGN IN ================================================== -->
    <div class="col-md-4 col-md-offset-4">
      <div class="panel panel-default">
        <h2>Reset Password</h2>
        <h4>Enter the email used to register </h4>
         {{ Form::open(array('url' => 'account/reset')) }}
          <p class="input-group">
            <span class="input-group-addon"><i class="fa fa-envelope fa-lg"></i></span>
            <input type="text" class="form-control intput-lg" name="email" placeholder="Email" />
          </p>
          <p class="text-right">
            <button type="submit" class="btn btn-primary btn-md"> Send </button>
          </p>
        {{ Form::close() }}
      </div>
    </div>
  </div>
</div>
@stop

@section('scripts')
@stop


