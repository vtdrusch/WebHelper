@extends('layouts.master')

@section('title', 'Forum @ LITTLEHelpers')

@section('head')
@stop

@section('content')
<!-- CONTENT ================================================== -->
<div class="container">
  <div class="row">
    <div class="col-sm-9 col-md-10 col-sm-offset-3 col-md-offset-2">
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
    <div class="col-sm-9 col-md-10 col-sm-offset-3 col-md-offset-2" >
      <div class="panel panel-default" style="padding: 20px 30px">
        @if(Auth::check())
          <button class="btn btn-success pull-right" data-toggle="modal" data-target="#new-topic"> New Topic </button>
        @endif
        <h3 class="sub-header media-heading"> {{{$category->category}}} </h3>
        
        <br>

        <ul class="topic-list list-group">
          @if($category->topics->count() > 0)
            @if(!Auth::guest()) <?php $subscriptions = Auth::user()->subscriptions; ?> @endif
            @foreach($category->topics as $topic)
            <?php $post = $topic->posts->first(); ?>
            <li class="list-group-item">
              <div class="media">
                <div class="media-right pull-right">
                  @if(!Auth::guest())
                    <button type="button" class="subscribe btn btn-default posted_message_heart_button"
                      data-id="{{ $topic->id }}" title="Unsubscribe">
                      @if($subscriptions->contains($topic->id))
                        <span class="fa fa-heart"></span>
                        <span class="posted_message_number_of_likes">Subscribed</span>
                      @else
                        <span class="fa fa-heart-o"></span>
                        <span class="posted_message_number_of_likes">Subscribe</span>
                      @endif
                    </button>
                  @endif
                </div>
                <div class="media-left">
                  <img style="height:66px; width:66px;"src="{{URL::to($topic->user->profile)}}" alt="picture">
                  <div class="reply-count">
                    <b> {{$topic->posts->count() - 1}} </b>
                    <p> Replies </p>
                  </div>
                </div>
                <div class="media-body">
                  <h3 class="media-heading"> <a href="{{URL::to('forum/topic/'.$topic->id)}}"> {{{str_limit($topic->subject, 100, '...')}}} </a></h3>
                  <p> 
                    {{{str_limit($post->content, 500, '...')}}}
                  </p>
                </div>
                <footer class="pull-right"> <small> {{Dates::showTimeAgo($post->created_at)}} by <b>{{{$post->user->username}}}</b></small></footer>
              </div>
            </li>
            @endforeach
          @else
            <p><i> No topics have been posted for this category. </i></p>
          @endif
        </ul>

      </div>
    </div>

    <div class="col-sm-3 col-md-2 sidebar">
      <ul class="nav nav-sidebar">
        <li class="dropdown-header">Categories</li>
          <li><a href="{{{URL::to('forum')}}}"> All Topics </a></li>
        @foreach($categories as $c)
          <li @if($c->id == $category->id) class="active" @endif><a href="{{{URL::to('forum/category/'.$c->category)}}}"> {{{$c->category}}} </a></li>
        @endforeach
      </ul>
    </div>
  </div>
</div>


<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="new-topic" class="modal fade" style="display: none;">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">New Topic</h4>
      </div>
      {{ Form::open(array('url' => 'forum/new-topic', 'class' => 'form-horizontal', 'role' => 'form')) }}
      <div class="modal-body centered">
        <div class="form-group">
          <label class="col-sm-2 control-label"> Subject: </label>
          <div class="col-sm-4">
            <input type="text" class="form-control intput-lg" name="subject" placeholder="" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label" > Category: </label>
          <div class="col-sm-4">
            <select class="form-control" name="category">
            @foreach($categories as $c)
              <option value="{{$c->id}}" @if($c->id == $category->id) selected="selected" @endif>{{{$c->category}}} </option>
            @endforeach
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label"> Content: </label>
          <div class="col-sm-9">
            <textarea rows="8" type="text" class="form-control intput-lg" name="content" placeholder=""></textarea>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button data-dismiss="modal" class="btn btn-default" type="button">Close</button>
        <button class="btn btn-success" type="submit">Submit</button>
      </div>
      {{ Form::close() }}
    </div>
  </div>
</div>

@stop

@section('scripts')
<script type="text/javascript">
  $('.subscribe').click(function() {
    var id = $(this).attr("data-id");
    var element = $(this);

    $.ajax({
      url: "{{ URL::to('user/subscribe') }}",
      type: "POST",
      data: {id: id},
      dataType: "json",
      success:function(data, textStatus, jqXHR)
      {
        element.children().first().removeClass("fa-heart fa-heart-o").addClass(data['i']);
        element.children().last().html(data['m']);
      },
      error: function(jqXHR, textStatus, errorThrown)
      {
    
      }
    });
  });
</script>
@stop