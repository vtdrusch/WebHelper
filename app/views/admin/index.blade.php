@extends('layouts.master')

@section('title', 'Forum @ LITTLEHelpers')

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
    <!-- horizontally center content -->
    <!-- FORUM ================================================== -->
    <div class="col-md-8 col-md-offset-2">
      <div class="panel panel-default">
        <h2>Admin Dashboard</h2>
        {{HTML::link('admin/resources', 'Manage Resources')}} <br>
        {{HTML::link('admin/forum', 'Manage Forum')}} <br>

        <br>
      </div>
    </div>
  </div>
</div>
@stop

@section('scripts')
@stop