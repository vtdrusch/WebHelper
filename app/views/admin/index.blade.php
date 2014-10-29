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
        <h2>Resource Group</h2>
        {{ Form::open(array('url' => 'admin/category', 'class' => 'form-inline')) }}
          <div class="form-group">
            <input type="text" placeholder="Title" id="title" name="title" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Group (one word)" id="category" name="category" class="form-control">
          </div>
          <div class="form-group">
            <button class="btn btn-primary" type="submit">Create</button>
          </div>
        {{ Form::close() }}
        <br>
        @if($categories->count() > 0) 
          @foreach($categories as $c)
            <p> <b>Title:</b> {{{$c->title}}} &nbsp;&nbsp;&nbsp;&nbsp; <b>Group:</b> {{{$c->category}}} </p>
          @endforeach
        @else
          <i> No Categories </i>
        @endif

        <br>

        <h2>Resources</h2>
        {{ Form::open(array('url' => 'admin/resource', 'class' => 'form-inline')) }}
          <div class="form-group">
            <input type="text" placeholder="Title" id="title" name="title" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Url" id="url" name="url" class="form-control">
          </div>
          <div class="form-group">
            <select placeholder="Group" id="category_id" name="category_id" class="form-control">
            @foreach($categories as $c)
              <option value="{{$c->id}}">{{{$c->title}}}</option>
            @endforeach
            </select>
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
          <h2> {{{$c->title}}} </h2>
          @foreach($c->resources as $r)
            <p><b>Title:</b> {{$r->title}} &nbsp;&nbsp;&nbsp;&nbsp; <b>Url:</b> {{$r->url}} </p>
          @endforeach
        @endforeach

        <br>
      </div>
    </div>
  </div>
</div>
@stop

@section('scripts')
@stop