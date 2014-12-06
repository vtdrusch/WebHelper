@extends('layouts.master')

@section('title', 'Admin @ Forum')

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
        <h2>Forum Categories</h2>
        {{ Form::open(array('url' => 'admin/category', 'class' => 'form-inline')) }}
          <div class="form-group">
            <input type="text" placeholder="Title" id="title" name="title" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Category (One Word)" id="category" name="category" class="form-control">
          </div>
          <div class="form-group">
            <button class="btn btn-primary" type="submit">Create</button>
          </div>
          <br> <br>
          <div class="form-group" >
            <textarea style="width:600px" placeholder="Description" id="description" name="description" class="form-control" rows="3"></textarea>
          </div>
        {{ Form::close() }}

        <br>
        @foreach($categories as $c)
          <h4> {{{$c->title}}} <small> ({{{$c->category}}}) </small> </h4>
          <p><b>Description: </b> <br>
            {{{$c->description}}}
          </p>
          <br>
        @endforeach

        <br>
      </div>
    </div>
  </div>
</div>
@stop

@section('scripts')
@stop