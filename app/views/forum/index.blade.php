@extends('layouts.master')

@section('title', 'Forum @ LITTLEHelpers')

@section('head')
@stop

@section('content')
<!-- CONTENT ================================================== -->
<div class="container-fluid">
  <div class="row">
    <div class="col-sm-3 col-md-2 sidebar">
      <ul class="nav nav-sidebar">
        <li class="dropdown-header">Categories</li>
        <li class="active"><a href="{{{URL::to('forum')}}}"> All Topics </a></li>
        @foreach($categories as $c)
          <li><a href="{{{URL::to('forum/category/'.$c->category)}}}"> {{{$c->category}}} </a></li>
        @endforeach
      </ul>
    </div>
    <!-- horizontally center content -->
    <!-- FORUM ================================================== -->
    <div class="col-sm-9 col-md-10 col-sm-offset-3 col-md-offset-2" >
      <div class="panel panel-default" style="padding: 20px 30px">
        <h1 class="sub-header contact-header" style="padding:0">Welcome to the Little Helpers Forum</h1>
        <p class="lead">Click on a category to the left to filter topics by category</p>
        <hr>

        <ul class="topic-list list-group">
          @if($topics->count() > 0)
            @if(!Auth::guest()) <?php $subscriptions = Auth::user()->subscriptions; ?> @endif
            @foreach($topics as $topic)
            <?php $post = $topic->posts->first();?>
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
            <p><i> No topics have been posted posted </i></p>
          @endif
        </ul>

        <br>
      </div>
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