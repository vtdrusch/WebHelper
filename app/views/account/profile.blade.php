@extends('layouts.master')

@section('title', 'Personal Profile @ Little Helper')

@section('head')
    <!-- Custom styles for this template -->
    {{HTML::style('assets/css/style.css')}}
    {{HTML::style('assets/css/style-responsive.css')}}
    {{HTML::style('assets/css/dropzone.css')}}

    <!-- Custom styles for this template -->
    {{HTML::script('assets/bootstrap/js/collapse.js')}}
    {{HTML::script('assets/bootstrap/js/tooltip.js')}}
    {{HTML::script('assets/bootstrap/js/popover.js')}}
    {{HTML::script('assets/js/profile.js')}}
    {{HTML::script('assets/js/dropzone.js')}}
    {{HTML::script('assets/js/grids.min.js')}}

@stop

@section('content')

<body>

<!-- CONTENT ================================================== -->
<div class="container" id="main-content">
  <div class="row">
    <div class="col-md-12"> <!-- horizontally center content -->
        <div class="row mt" id="main-content-box">
                
            <!-- LEFT SIDEBAR ================================================== -->
            <div class="col-lg-3 col-md-3 col-sm-12">
                <div class="showback-about aboutMe">
                    <div class="usr-photo">
                        {{HTML::image(Auth::user()->profile, 'user photo', 
                        array('id' => 'profile-pic', 'class' => 'img-rounded', 'width' => '180', 'height' => '180'))}}
                        <div class="profile-upload">
                          <button class="btn btn-default">
                            <i class="fa fa-camera fa-lg"></i>
                          </button>
                        </div>
                        <div id="hidden-container" class="hidden"></div>
                    </div>
                    <h3>{{{ Auth::user()->username }}}</h3>
                    <p class="about hide"> 
                        A baby panda’s growing process is interesting, but very difficult, 
                        because they are extremely fragile and can easily get sick and die. 
                        At breeding centers 90% of baby pandas survive nowadays, compared 
                        to no more than 30% in the 1960s.
                    </p>
                    <button type="submit" class="btn btn-info btn-lg hide"> Follow </button>
                </div> <!-- /aboutMe -->

            </div>

            <!-- MAIN CONTENT ================================================== -->
            <div class="col-lg-9 col-md-9 col-sm-12"> 
                 
                <!-- TABS -->
                <ul class="nav nav-tabs profile-tabs" role="tablist" id="myTab">
                    <li role="presentation">
                        <a a data-toggle="tab" href="#profile">Forum Feed</a></li>
                    <li role="presentation">
                        <a data-toggle="tab" href=".tab-kids">Kids</a></li>
                    <li role="presentation">
                        <a data-toggle="tab" href=".tab-resources">Favorite Resources</a></li>
                    <li role="presentation">
                        <a data-toggle="tab" href=".tab-photos">Photos</a></li>
                </ul>
                
                <!-- TAB CONTENT -->
                <div class="tab-content">
                    
                    <!-- KIDS TAB PANE -->
                    <div class="tab-kids tab-pane showback fade in active">
                        
                        <div class="row">
                                <h3>My Kids
                                <button type="button" class="hide btn btn-primary pull-right kid-buttons"
                                        data-toggle="modal" data-target="#removeKid">
                                    <span class="fa fa-remove"></span>
                                    Remove Kid
                                </button>
                                <button type="button" class="btn btn-primary pull-right kid-buttons"
                                        data-toggle="modal" data-target="#addKid">
                                    <span class="fa fa-plus"></span>
                                    Add Kid
                                </button>
                            </h3>
                        </div>
                        
                       <hr>

                        <div>                            
                        <ul id="kid-list" class="media-list">
                          @foreach(Auth::user()->kids as $k)
                           <li data-id="{{$k->id}}" class="media">
                              <div class="pull-left">
                                 <img class="media-object comment-img" src="http://web-helper.gopagoda.com/assets/img/friends/fr-12.jpg"
                                 alt="Generic placeholder image">
                              </div>
                              <button data-id="{{$k->id}}" class="remove-kid btn btn-danger btn-sx pull-right"><i class="fa fa-remove"></i> Remove </button>
                              <div class="media-body">
                                <h4 class="media-heading media-heading-kids-name">{{{$k->name}}}</h4>
                                  <span class="bold">Age:</span> {{{$k->age}}} </br>
                                  <span class="bold">Special Needs: </span>  {{{$k->need}}} </br>
                                  <span class="bold">About: </span> {{{$k->about}}}
                                </span>
                            </div>
                            </li>
                            @endforeach
                        </ul>
                        
                        </div>
                    </div>
                    
                    <!-- RESOURCE TAB PANE -->
                    <div class="tab-resources tab-pane showback fade">
                        <?php $res = Auth::user()->resources; ?>
                        @if($res->count() > 0)
                          @foreach($res as $r)
                           <div class="res-container">
                       	      <dt> 
                                <a href="{{$r->url}}"> {{{$r->title}}} </a>
                                <span class="pull-right text-muted"> 
                                  <span class="count"> {{{$r->favorites}}} </span>
                                  <i id="{{$r->id}}" data-id="{{$r->id}}" class="favorite fa fa-heart"> </i>
                                </span>
                              </dt>
                       	      <dd> <p> {{{$r->description}}} </p></dd>
                            </div>
                          @endforeach
                        @else
                          <div class="posted_message_caption h4">
                            You haven't favorited any resources yet. <br><br>
                            Head over to {{HTML::link('resources', 'RESOURCES')}} to view a compilation of resources available,
                            then simply click on the heart next to a resources to have it appear here!
                          </div>
                        @endif
                    </div>
                    
                      <!-- PROFILE TAB PANE -->
                    <div id="profile" class="tab-pane fade">
          						<?php $topics = Auth::user()->subscriptions;?>
                      @if($topics->count() == 0)
                      <div class="showback">
                        <div class="row posted_message_header">
                        </div>

                        <div class="row">
                          <div class="col-md-2">
                          <img style="height:70px; width:70px;"src="{{URL::to('/assets/img/friends/fr-12.jpg')}}" alt="picture">

                            <div class="posted_message_usr_name">Little Helpers</div>
                          </div>
                          <div class="col-md-10">
                            <h3 class="media-heading contact-header" style="padding-left:0"> Hi {{Auth::user()->username}}! </h3>
                            <div class="posted_message_caption h4">
                              Welcome to Little Helpers, <br>
                              A social network and forum for parents with children who are "Differently-abled". <br><br>

                              Little Helpers makes it easy to connect, support, and interact with other parents around the world. <br><br>
                              
                              Take a few minutes to add an avatar image by clicking on the image to the left.
                              Then head over to the {{HTML::link('resources', 'RESOURCES')}} to view a compilation of resources available,
                              or browse the {{HTML::link('forum', 'FORUM')}} to view discussions other parents are having.

                            </div>
                          </div>
                        </div>
                      </div>
                      @else
                      <?php $topics->load('posts.user'); ?>
          						@foreach($topics as $topic)
                      <div class="showback">
          							<?php $post = $topic->posts->first(); ?>
          							<div class="row posted_message_header"> 
          								<!-- DROP DOWN MENU for LIKES -->
          								<button type="button" class="subscribe btn btn-default posted_message_heart_button"
          									data-id="{{ $topic->id }}" title="Unsubscribe">
            								<span class="fa fa-heart"></span>
            								<span class="posted_message_number_of_likes">Subscribed</span>
          								</button>
          							</div>

          							<div class="row">
          								<div class="col-md-2">
          								<img style="height:70px; width:70px;"src="{{URL::to($topic->user->profile)}}" alt="picture">

          									<div class="posted_message_usr_name">{{{ $post->user->username }}}</div>
          								</div>
          								<div class="col-md-10">
          									<h3 class="media-heading"> <a href="{{URL::to('forum/topic/'.$topic->id)}}"> {{{str_limit($topic->subject, 50, '...')}}} </a></h3>
          									<div class="posted_message_caption">
          									<h4 class="posted_message_caption_text">
          										{{{str_limit($post->content, 500, '...')}}}</h4>
          									</div>
          								</div>
          							</div>

          							<div class="row posted_message_footer goleft posted_message_footer_spacing">
          								<div class="col-md-2">
          								</div>
          								<button type="button" class="btn posted_message_footer_button disabled pull-right">
          									<span class="comment_button">{{Dates::showTimeAgo($post->created_at)}}</span>
          								</button>

          			<!--
          								<button type="button" class="btn comment_button">
          									<span>Private</span>
          								</button>
          			-->
          								<?php $posts = $topic->posts; $posts->shift(); ?>
          								@if($posts->count() !== 0)
          									<button type="button" class="btn posted_message_footer_button" 
          											data-toggle="collapse" data-target="#topic{{ $topic->id }}" 
          											aria-expanded="false" aria-controls="{{ $topic->id }}">
          										{{ $posts->count() }} Replies
          									</button>
          								@else
          									<button type="button" class="btn posted_message_footer_button disabled">
          										<span class="comment_button">{{ $posts->count() }} Replies</span>
          									</button>
          								@endif

          								<button type="button" class="btn posted_message_footer_button hide"
          										data-toggle="modal" data-target="#deletePost">
          									<span class="fa fa-trash"></span>
          								</button>

          								<button type="button" class="btn posted_message_footer_button hide">
          									<span class="fa fa-question-circle"></span>
          								</button>
          							</div>

          							<!-- Drop Down Comments -->
          							@if($posts->count() !== 0)
          								<div id="topic{{ $topic->id; }}" class="collapse">
          									<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          									  <div class="panel panel-default" style="padding:0">
          										<div class="panel-heading" role="tab" id="headingOne">
          										  <h4 class="panel-title">
          											  Replies
          										  </h4>
          										</div>
          										<div id="collapseOne" class="panel-collapse collapse in" 
          											 role="tabpanel" aria-labelledby="headingOne">
          											<div class="panel-body">
                                  <ul class="topic-list list-group">
            												@foreach($posts as $p)
            												  <!-- media list comments -->
            												  <li class="media">
                                        <img class="pull-left" style="width:66px;"src="{{URL::to($p->user->profile)}}" alt="picture">
            													  <div class="media-body">
            														  <p>{{{$p->content}}}</p>
                                        </div>
                                        <footer class="pull-right"> <small> {{Dates::showTimeAgo($p->created_at)}} by <b>{{{$p->user->username}}}</b></small></footer>
            													</li>
            												@endforeach
                                  </ul>
          											</div>
          										</div>
          									  </div>
          									</div>
          								</div>
          							@endif
                      </div>
          						@endforeach
                      @endif
                    </div><!-- /showback -->

                    <!-- ADD PHOTOS -->
                    <!-- http://bootsnipp.com/snippets/featured/bootstrap-drag-and-drop-upload -->
                    <div class="tab-photos tab-pane fade in active showback">
                      <div class="panel panel-default">
                        <div class="drop-down-add-photo" role="tab" id="headingTwo">
                          <h4 class="panel-title">
                            <a class="collapsed" data-toggle="collapse" 
                               data-parent="#accordion" href="#collapseTwo" 
                               aria-expanded="false" aria-controls="collapseTwo">
                              <span class="fa fa-plus"></span>
                              <span class="add-photos">Add Photos</span>  
                            </a>
                          </h4>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                          <div class="panel-body">
                            <div class="bottom-buffer">
                              <h2>Upload Photos</h2>
                              <h4>Select files from your computer<h4>
                            </div>
                            <div class="bottom-buffer">
                              {{ Form::open(array('id' => 'uploads', 'url' => 'user/upload', 'files' => true, 'class' => 'dropzone')) }}
                              {{ Form::close() }}
                            </div>
                          </div>
                        </div>
                      </div>

                      <h3> Photos </h3>
                      <div class="photo-bucket top1">
                        <ul class="row photo-bucket-row">
                          @foreach(Auth::user()->uploads as $p)
                          <li class="upload-item col-lg-3 col-md-3 col-sm-3 col-xs-3 img">
                              {{HTML::image(URL::to('uploads/'.Auth::user()->username.'/thumbnails/'.$p->path), 'user photo', 
                              array('id' => 'upload'.$p->id, 'data-id' => $p->id, 'data-src' => URL::to('uploads/'.Auth::user()->username.'/'.$p->path), 'class' => 'upload img-rounded'))}}            
                          </li>
                          @endforeach
                        </ul>
                      </div>

                    </div><!--/showback -->
                </div>
            </div>
        </div>


        <!-- MODUALS (POP-UPS) ================================================== -->
        <!-- Modal delete post -->
        <div class="modal fade" id="deletePost" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title centered" id="myModalLabel">You are about to delete your post!</h4>
              </div>
              <div class="modal-body centered">
                Are you sure you want to delete your post? All comments and likes will also 
                  be deleted.
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal add kid -->
        <div class="modal fade" id="addKid" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title centered" id="myModalLabel">Add a Kid</h4>
              </div>
              
            {{ Form::open(array('id' => 'form-kid', 'url' => 'user/kid')) }}
            <div class="modal-body">
                <div class="form-group">
                    <p>Name:</p> <p><input id="kid-name" class="form-control" type="text" name="name"></p>
                    <p>Age:</p> <p><input id="kid-age" class="form-control" type="text" name="age"></p>
                    <p>Special Need:</p> <p><input id="kid-need" class="form-control" type="text" name="need"></p>
                    <p>About: <textarea id="kid-about" rows="8" type="text" class="form-control intput-lg" name="about" placeholder=""></textarea></p>
                </div>
            </div>
              
            {{ Form::close() }}
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button id="add-kid" type="submit" class="btn btn-primary">Save changes</button>
            </div>

            </div>
          </div>
        </div>

        <!-- Modal remove kid -->
        <div class="modal fade" id="removeKid" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title centered" id="myModalLabel">Remove Kid</h4>
              </div>
            <div class="modal-body">
                <div class="form-group">
                    <p> <input type="checkbox" name="remove-kid-name" class="checkbox" /> Kid 1 </p>
                    <p> <input type="checkbox" name="remove-kid-name" class="checkbox" /> Kid 2 </p>
                </div>  
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>

            </div>
          </div>
        </div>

        <!-- Modal Picture -->
        <div id="upload-modal" class="modal fade">
          {{Form::open(array('id' => 'delete-upload', 'url' => 'user/delete-upload'))}}
            <input id="upload-id" type="hidden" name="id"/>
          {{Form::close()}}
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title"> &nbsp; </h4>
              </div>
              <div class="modal-body">
                <img alt="upload" class="center-block img-rounded img-responsive thumbnail" src="http://webhelper.local/public/uploads/webhelper/JQZpzCFxfDOx.jpg">          
              </div>
              <div class="modal-footer">
                <button id="btn-delete-upload" type="button" class="btn btn-danger" style="margin-right: 10px" data-loading-text="Deleting...">Delete</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <!-- FOOTER ================================================== -->
        <footer class="site-footer">
          <div class="text-center">
              <p>
              2014 - pandaBears
              </p>
          </div>
        </footer>
        <!--footer end-->
        
      </div>
  </div> <!-- end wrapper -->
</div> <!-- end main-content -->

</body>
    

@stop

@section('scripts')
<script>
  // File upload configuration
  Dropzone.options.uploads = {
    paramName: "file",
    uploadMultiple: false,
    autoProcessQueue: true,
    addRemoveLinks: false,
    thumbnailWidth: 250,
    thumbnailHeight: 150,
    init: function() {
      this.on("thumbnail", function(file, dataUrl) {
        var reader = new FileReader();
        reader.onloadend = function () {
          var pic = reader.result;
          $('#upload-thumb').attr('data-src', pic);
        }

        $('.photo-bucket-row').append('<li class="upload-item col-lg-3 col-md-3 col-sm-3 col-xs-3 img"> <img id="upload-thumb" data-id="0" src="" data-src="" class="upload img-rounded" alt="user photo"> </li>');
        $('#upload-thumb').attr('src', dataUrl);
        reader.readAsDataURL(file);
        $('.upload').click(function() {
          var id = $(this).attr('data-id');
          var src = $(this).attr('data-src');
          $('#upload-id').val(id);
          $('#upload-modal img').attr('src', src);
          $('#btn-delete-upload').button('reset');
          $('#upload-modal').modal('toggle');
        });
      });
      this.on('success', function(file, response) {
        $('#upload-thumb').attr('data-id', response);
        $('#upload-thumb').attr('id', 'upload'+response);
      });
      this.on('error', function(file, error) {
        $('#upload-thumb').parent().remove();
      });
    }
  };

  // Document Ready
  $(document).ready(function(){ 
    $("#myTab li:eq(0) a").tab('show');
    //$('.upload-item').responsiveEqualHeightGrid();
    $(".profile-upload button").dropzone({ 
      url: "{{URL::to('user/upload-profile')}}", 
      clickable: true,
      parallelUploads: 1,
      uploadMultiple: false,
      previewsContainer: "#hidden-container",
      createImageThumbnails: true,
      thumbnailWidth: 180,
      thumbnailHeight: 180,
      init: function() {
        this.on("thumbnail", function(file, dataUrl) { $('#profile-pic').attr('src', dataUrl);});
      }
    });
  });

  // Functions
  $(function ()  
    { $("#example, #example2").popover();  
  }); 
  
  $('.popover-with-html').popover({ html : true });

  $('.upload').click(function() {
    var id = $(this).attr('data-id');
    var src = $(this).attr('data-src');
    $('#upload-id').val(id);
    $('#upload-modal img').attr('src', src);
    $('#btn-delete-upload').button('reset');
    $('#upload-modal').modal('toggle');
  });

  $('#btn-delete-upload').click(function() {
    var id = $('#upload-id').val();
    var data = $('#delete-upload').serializeArray();
    var url = $('#delete-upload').attr("action");

    $(this).button('loading');
    $.ajax(
    {
        url: url,
        type: "POST",
        data: data,
        dataType: "json",
        success:function(data, textStatus, jqXHR)
        {
          $('#btn-delete-upload').button('reset');
          $('#upload' + id).parent().remove();
          //$('.upload-item').responsiveEqualHeightGrid();
          $('#upload-modal').modal('hide');
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
          $('#btn-delete-upload').button('reset');
        }
    });
  });

  $('.favorite').click(function() {
    var url = "{{URL::to('user/favorite')}}";
    var id = $(this).attr('data-id');
    var element = "#"+id;

    $.ajax({
      url: url,
      type: "POST",
      data: {id: id},
      dataType: "json",
      success:function(data, textStatus, jqXHR)
      {
        $(element).removeClass("fa-heart fa-heart-o").addClass(data['class']);
        $(element).prev().html(data['count']);
        $(element).closest(".res-container").remove();
      },
      error: function(jqXHR, textStatus, errorThrown)
      {
        alert();
      }
    });
  });

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

  $('#add-kid').click(function() {
    var data = $('#form-kid').serializeArray();
    var url = $('#form-kid').attr("action");

    $.ajax(
    {
        url: url,
        type: "POST",
        data: data,
        dataType: "json",
        success:function(data, textStatus, jqXHR)
        {
          $('#kid-list').append('<li id="kid'+ data['id'] + '" data-id="' +  data['id'] + '" class="media"> ' +
                                '<div class="pull-left"> <img class=" media-object comment-img" src="http://web-helper.gopagoda.com/assets/img/friends/fr-12.jpg" alt="Generic placeholder image"> </div>' +
                                '<button data-id="'+data['id']+'" class="remove-kid btn btn-danger btn-sx pull-right"><i class="fa fa-remove"></i> Remove </button>' +
                                '<div class="media-body">' + 
                                '<h4 class="media-heading media-heading-kids-name"> ' +   $('#kid-name').val() + '</h4>' +
                                '<span class="bold">Age:</span> '+   $('#kid-age').val() + '<br>' +
                                '<span class="bold">Special Needs: </span> ' +   $('#kid-need').val() +  '<br>' +
                                '<span class="bold">About: </span> ' + $('#kid-about').val() + '</div> </li>'
                                );
          $('#addKid').modal('hide');
          $('.remove-kid').click(function() {
    var id = $(this).attr('data-id');
    var url = "{{URL::to('user/remove-kid')}}";
    var element = $(this);

    $.ajax(
    {
        url: url,
        type: "POST",
        data: {id : id },
        dataType: "json",
        success:function(data, textStatus, jqXHR)
        {
          element.closest(".media").remove();
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
          
        }
    });
  });
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
          
        }
    });
  });




$('.remove-kid').click(function() {
    var id = $(this).attr('data-id');
    var url = "{{URL::to('user/remove-kid')}}";
    var element = $(this);

    $.ajax(
    {
        url: url,
        type: "POST",
        data: {id : id },
        dataType: "json",
        success:function(data, textStatus, jqXHR)
        {
          element.closest(".media").remove();
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
          
        }
    });
  });

</script>
@stop
