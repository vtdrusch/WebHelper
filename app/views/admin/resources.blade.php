@extends('layouts.master')

@section('title', 'Admin @ Resources')

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
        {{ Form::open(array('url' => 'admin/group', 'class' => 'form-inline')) }}
          <div class="form-group">
            <input type="text" placeholder="Title" id="title" name="title" class="form-control">
          </div>
          <div class="form-group">
            <input type="text" placeholder="Group (one word)" id="group" name="group" class="form-control">
          </div>
          <div class="form-group">
            <button class="btn btn-primary" type="submit">Create</button>
          </div>
        {{ Form::close() }}
        <br>
        @if($groups->count() > 0) 
          @foreach($groups as $g)
            <p> <b>Title:</b> {{{$g->title}}} &nbsp;&nbsp;&nbsp;&nbsp; <b>Group:</b> {{{$g->group}}} </p>
          @endforeach
        @else
          <i> No Groups </i>
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
            <select placeholder="Group" id="group_id" name="group_id" class="form-control">
            @foreach($groups as $g)
              <option value="{{$g->id}}">{{{$g->group}}}</option>
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
        @foreach($groups as $g)
          <h2> {{{$g->title}}} </h2>
          @foreach($g->resources as $r)
            <p><b>Title:</b> {{{$r->title}}} &nbsp;&nbsp;&nbsp;&nbsp; <b>Url:</b> {{{$r->url}}} </p>
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