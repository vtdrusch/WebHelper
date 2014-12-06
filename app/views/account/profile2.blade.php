@extends('layouts.master')

@section('title', 'Personal Profile @ Little Helper')

@section('head')
    <!-- Custom styles for this template -->
    {{HTML::style('assets/css/style.css')}}
    {{HTML::style('assets/css/style-responsive.css')}}

    <!-- Custom styles for this template -->
    {{HTML::script('assets/bootstrap/js/collapse.js')}}
    {{HTML::script('assets/bootstrap/js/tooltip.js')}}
    {{HTML::script('assets/bootstrap/js/popover.js')}}
    {{HTML::script('assets/js/profile.js')}}

    <script>
    
        
       $(function ()  
            { $("#example, #example2").popover();  
        }); 
        $('.popover-with-html').popover({ html : true });
        
        function resources() {
            document.getElementById("demo").innerHTML = "Hello World";
        }
        
    
    </script>

@stop

@section('content')

<body id="profileBody">

<section id="container" >

<!-- ***************************************************
LEFT SIDEBAR MENU
***************************************************** -->
<aside>
  <div id="sidebar" class="nav-collapse ">
      
    <!-- ABOUT ME -->
    <!-- sidebar menu start-->
    <ul class="sidebar-menu" id="nav-accordion">
        <div class="aboutMe">
            <div class="usr_photo">
                {{HTML::image('assets/img/friends/fr-10.jpg', 'user photo', 
                array('class' => 'img-rounded', 'width' => '180', 'height' => '180'))}}            
            </div>
            <h4 class="centered">Dino Slinger</h4>
            <p class="about"> Dino Slinger was born on November 
                15, 1887, in Sun Prairie, Wisconsin and studied at the Art Institute of Chicago.
            </p>
            <button type="submit" class="btn btn-info btn-lg"> Follow </button>
        </div> <!-- /aboutMe -->
    </ul>
    <!-- sidebar menu end-->
  </div>
</aside>
<!--sidebar end-->
      
<!-- ***************************************************
MAIN CONTENT
***************************************************** -->
<!--main content start-->
<section id="main-content">
  <section class="wrapper">
    <div class="row mt" id="main-content-box">
        
        <!-- TABS -->
        <div class="col-lg-12 col-md-12 col-sm-12">
            <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active"><a href="#">My Profile</a></li>
                <li role="presentation"><a href="#">Kids</a></li>
                <li role="presentation" onclick="resources()"><a href="#">Favorite Resources</a></li>
                <li role="presentation"><a href="#">Photos</a></li>
            </ul>
        </div>
        
        <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="showback">
                <p id="demo">hello</p>
                <ul id="stickies">
                </ul>
            </div>
        </div>
        
        <div class="col-lg-8 col-md-8 col-sm-12">    
            <!-- CREATE A POST -->
            <div class="showback">
                <h4><i class="fa"></i> Create A Post </h4>
                    <div class="col-lg-12, right">
                    <textarea id="textarea" name="textarea"
                              placeholder="Share your thoughts"></textarea>
                    </div>
                    <div class="post_button">
                        <button type="submit" class="btn btn-primary btn-md pull-left">
                            Add Photo</button>
                        <button type="submit" class="btn btn-success btn-md" id="post-button"  onclick="css()"> 
                            Post </button>
                    </div>
            </div><!--/showback -->

            <span id="myForm"></span>
            
            <!-- FOLLOWER'S POST -->
            <div class="showback">
                
                <div class="row, posted_message_header"> 
                    <button type="button" id="example" class="btn btn-default
                                                              posted_message_heart_button" 
                            data-container="body" data-toggle="popover" data-html="true"
                            data-placement="bottom" title="Likes"
                            data-content='<div class="row likes_popup">
                                              <div class="col-md-3">
                                                {{HTML::image("assets/img/friends/fr-03.jpg", "user photo", 
                                                array("class" => "img-rounded", "height" => "90",
                                                "width" => "90"))}}</div>
                                             <div class="col-md-9">KittenRules</div>
                                         </div>
                                         <div class="row likes_popup">
                                              <div class="col-md-3">
                                                {{HTML::image("assets/img/friends/fr-01.jpg", "user photo", 
                                                array("class" => "img-rounded", "height" => "90",
                                                "width" => "90"))}}</div>
                                             <div class="col-md-9">Funny Head</div>
                                         </div>
                                         <div class="row likes_popup">
                                              <div class="col-md-3">
                                                {{HTML::image("assets/img/friends/fr-02.jpg", "user photo", 
                                                array("class" => "img-rounded", "height" => "90",
                                                "width" => "90"))}}</div>
                                             <div class="col-md-9">LongChamp</div>
                                        </div>'
                            >
                        
                    <span class="glyphicon glyphicon-heart posted_message_heart_icon"></span>
                    <span class="posted_message_number_of_likes">155</span>
                    </button>
                </div>
                
                <div class=row>
                    <div class="col-md-2">
                        {{HTML::image('assets/img/friends/fr-10.jpg', 'user photo', 
                            array('class' => 'img-rounded', 'width' => '90', 'height' => '90'))}} 
                        <div class="posted_message_usr_name">Dino Slinger</div>
                    </div>
                    <div class="col-md-10">
                        {{HTML::image('assets/img/clouds.jpg', 
                        'user photo', array('class' => 'img-rounded'))}}   
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-md-2">
                    </div>
                    <div class="col-md-10">
                        <div class="posted_message_caption">
                        <h4 class="posted_message_caption_text">
                            Just before dawn accelerated at the last point of 
                            departure before the big illuminated structures</h4>
                        </div>
                    </div>
                </div>
                
                <div class="row posted_message_footer goleft posted_message_footer_spacing">
                    <div class="col-md-2">
                    </div>
                    <button type="button" class="btn posted_message_footer_button disabled">
                        <span class="comment_button">October 30, 2014</span>
                    </button>

<!--
                    <button type="button" class="btn comment_button">
                        <span>Private</span>
                    </button>
-->
                    
                    <button type="button" class="btn posted_message_footer_button" 
                            data-toggle="collapse" data-target="#demo" 
                            aria-expanded="false" aria-controls="demo">
                        13 Comments
                    </button>
                    
                    <button type="button" class="btn posted_message_footer_button"
                            data-toggle="modal" data-target="#deletePost">
                        <span class="glyphicon glyphicon-remove-sign"></span>
                    </button>

                    <!-- Modal -->
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
                    
                    <button type="button" class="btn posted_message_footer_button">
                        <span class="glyphicon glyphicon-question-sign"></span>
                    </button>
                </div>
                
                <!-- Drop Down Comments -->
                <div id="demo" class="collapse">
                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                      <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne">
                          <h4 class="panel-title">
                              Comments
                          </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in" 
                             role="tabpanel" aria-labelledby="headingOne">
                            <div class="panel-body">
                                <div class="row post_message_comments_box">
                                    <div class="col-md-2"> 
                                        {{HTML::image('assets/img/friends/fr-02.jpg', 'user photo', 
                                        array('class' => 'img-rounded'))}} 
                                    </div>
                                    <div class="col-md-10">
                                        <h6 class="posted_message_comments_box_author">Funny Head</h6>
                                        <h4>Awesome! Great work. Looks like cotton balls. Wondering if maybe things would look better if there was some green in the sky?</h4>
                                    </div>
                                </div>
                            
                                <div class="row comment_box">
                                    <div class="col-md-2"> 
                                        {{HTML::image('assets/img/friends/fr-03.jpg', 'user photo', 
                                        array('class' => 'img-rounded'))}} 
                                    </div>
                                    <div class="col-md-10">
                                        <h6 class="posted_message_comments_box_author">Beat Lover</h6>
                                        <h4>Is that Georgia O'Keeffe?</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div><!-- /showback -->

            <!-- FORUM POST -->
            <div class="showback">
                
                <div class="row, message_forum_header"> 
                    <span class="message_forum_title">Forum Response</span>
                    <p class="message_forum_subtitle">/parents/support groups/blind/where can I find?</p>
                </div>
                
                <div class="row">
                    <div class="col-md-2">
                        {{HTML::image('assets/img/friends/fr-09.jpg', 'user photo', 
                            array('class' => 'img-rounded', 'width' => '90', 'height' => '90'))}} 
                        <div class="posted_message_usr_name">KittenRules</div>
                    </div>
                    <div class="col-md-10">
                        <div class="message_caption_forum">
                        <h4 class="message_forum_caption">
                           Until you're as old as I am and want to look old 
                            enough to order off the seniors menu :-\
                            </h4>
                        </div>
                    </div>
                </div>
                
                <div class="row, message_footer message_reply">
                    <div class="col-md-2">
                    </div>
                    <button type="submit" class="btn btn-primary btn-md"> Reply </button>
                </div>
            </div><!-- /showback -->
        </div>

<!-- RIGHT SIDE OF CONTENT SCREEN ------------------------------------------------>
        <div class="col-lg-4 col-md-4 col-sm-12">
            <!-- KID'S DROPDOWN MENU -->
            <div class="showback kids">
                <!-- Single button -->
                <div class="btn-group">
                  <button type="button" class="btn btn_blank btn-lg dropdown-toggle" data-toggle="dropdown">
                    <h4>All Kids  <span class="caret"></h4></span>
                  </button>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="#">David</a></li>
                    <li><a href="#">Leia</a></li>
                  </ul>
                </div> 
            </div><!-- /showback -->
        </div><!-- /col-lg-4 -->

    </div>  <!--/ row -->
  </section> <!--/wrapper -->
</section> <!-- /MAIN CONTENT -->
<!--main content end-->
      
<!-- ***************************************************
FOOTER
***************************************************** -->

<!--footer start-->
<footer class="site-footer">
  <div class="text-center">
      <p>
      2014 - pandaBears
      </p>
  </div>
</footer>
<!--footer end-->
      
  
</body>
    

@stop

@section('scripts')



@stop