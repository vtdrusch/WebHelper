@extends('layouts.master')

@section('title', 'Forum @ LITTLEHelpers')

@section('head')
@stop

@section('content')
<!-- CONTENT ================================================== -->
<div class="container">
  <div class="row">
    <div class="col-sm-9 col-md-10 col-sm-offset-2 col-md-offset-1">
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
    <div class="col-sm-9 col-md-10 col-sm-offset-2 col-md-offset-1" >
      <div class="panel panel-default" style="padding: 20px 30px">
        @if(Auth::check())
          <?php $subscriptions = Auth::user()->subscriptions; ?>
          <button class="btn btn-success pull-right" data-toggle="modal" data-target="#reply"> Reply </button>
        @endif
        <h3 class="sub-header media-heading"> <a href="{{URL::to('forum')}}"><span> <i class="fa fa-reply"> Forum</i></span></a></h3>
        
        <br>
        <?php $topic->load('posts.user'); $posts = $topic->posts; $post = $posts->shift(); ?>
        <div class="media" style="margin-bottom: 30px">
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
            <img style="height:66px; width:66px;"src="{{URL::to($post->user->profile)}}" alt="picture">
            <div class="reply-count">
              <b> {{$topic->posts->count()}} </b>
              <p> Replies </p>
            </div>
          </div>
          <div class="media-body">
            <h3 class="media-heading">{{{$topic->subject}}}</h3>
            <p> 
              {{{$post->content}}}
            </p>
          </div>
          <footer class="pull-right"> <small> {{Dates::showTimeAgo($topic->created_at)}} by <b>{{{$topic->user->username}}}</b></small></footer>
        </div>

        <ul class="topic-list list-group">
          @foreach($posts as $p)
          <li class="list-group-item">
            <div class="media">
              <div class="media-left">
                <img style="height:66px; width:66px;"src="{{URL::to($p->user->profile)}}" alt="picture">
              </div>
              <div class="media-body">
                <p> 
                  {{{$p->content}}}
                </p>
              </div>
              <footer class="pull-right"> <small> {{Dates::showTimeAgo($p->created_at)}} by <b>{{{$p->user->username}}}</b></small></footer>
            </div>
          </li>
          @endforeach
        </ul>

      </div>
    </div>

  </div>
</div>


<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="reply" class="modal fade" style="display: none;">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title">Reply</h4>
      </div>
      {{ Form::open(array('url' => 'forum/reply', 'class' => 'form-horizontal', 'role' => 'form')) }}
      {{ Form::hidden('topic', $topic->id) }}
      <div class="modal-body centered">
        <div class="form-group">
          <div class="col-sm-10 col-sm-offset-1">
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