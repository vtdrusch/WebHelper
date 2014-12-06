@extends('layouts.master')

@section('title', 'About @ LITTLEHelpers')

@section('head')
    <!-- Custom styles for this template -->
    {{HTML::style('assets/css/style.css')}}
    {{HTML::style('assets/css/style-responsive.css')}}
@stop

@section('content')
<body class="cover">
    
 <!-- CONTENT ================================================== -->
<div class="container" id="main-content">
  <div class="row">
    <div class="col-md-12"> <!-- horizontally center content -->
        <div class="row mt-contacts" id="main-content-box">
        
            <div class="centered">
                <h1 class="contact-header">About Little Helpers</h1>
                <h3 class="contact-about-paragraph"> 
                  Little Helpers helps you connect with other parents who have children with special needs. 
                  Share photos, audio, and video and ideas with chosen individuals. 
                  You can also rate resources like doctors, schools, toys, and assistive devices and share 
                  them with the community. 
                </h3>
                    {{HTML::link("/home", "Get Started Here", array('class'=>'btn btn-warning btn-lg text-center contact-more-button'))}}
                <hr>
            </div>
            
            <div>
            <h1>Meet the Team</h1>

            <div class="row contact-profiles">
                <div class="col-lg-2 col-md-2 col-sm-12">
                    {{HTML::image('assets/img/friends/fr-01.jpg', 'user photo', 
                        array('class' => 'img-rounded'))}}            
                </div>
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <h3 class="media-heading"> Vince </h3>
                    <p>
                    Vince learned the value of great design at an early age. He has been adding his creative 
                    flair to a wide variety of professional and personal projects for as long as he can remember. 
                    He attended the School of Design at North Carolina State University and started his business
                    career in Wilmington in the early nineties. After many years as a successful entrepreneur, 
                    he founded Little Helpers in 2003.
                    </p>
                </div>
            </div>

            <div class="row contact-profiles">
                <div class="col-lg-2 col-md-2 col-sm-12">
                    {{HTML::image('assets/img/friends/fr-11.jpg', 'user photo', 
                        array('class' => 'img-rounded'))}}            
                </div>
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <h3 class="media-heading"> Julio </h3>
                    Julio joined the Little Helpers team all the way from Washington state and brings over 
                    15 years of experience in the web design and development field. He is skilled in front and 
                    back-end web development with expertise in content management and data-driven design.
                </div>
            </div>

            <div class="row contact-profiles">
                <div class="col-lg-2 col-md-2 col-sm-12">
                    {{HTML::image('assets/img/friends/fr-09.jpg', 'user photo', 
                        array('class' => 'img-rounded'))}}            
                </div>
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <h3 class="media-heading"> Nicole </h3>
                    Nicole joined the Little Helper team in September 2013 as a web developer with over 
                    13 years of experience designing and developing for the web. She will be using her skills 
                    and experience to bring a creative modern approach to development, implementation, and 
                    problem solving. A Wilmington local, Nicole is extremely excited about bringing her deep 
                    passion and enthusiasm to the team.
                </div>
            </div>

            <div class="row contact-profiles">
                <div class="col-lg-2 col-md-2 col-sm-12">
                    {{HTML::image('assets/img/friends/fr-08.jpg', 'user photo', 
                        array('class' => 'img-rounded'))}}            
                </div>
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <h3 class="media-heading"> Michael </h3>
                    Michael has been a part of Little Helpers since summer of 2014, bringing over a decade of 
                    agency experience to our web design and development team. Originally from Jamestown PA, 
                    Michael and his family have called Wilmington home for over 8 years. He has also spent 13 
                    years refining project management skills as an Air National Guardsman. 
                    His diverse programming background and years of industry experience gives us a unique 
                    opportunity to continue exceed our customers needs on a variety of levels.
                </div>
            </div>

            <div class="row contact-profiles contact-profiles-end">
                <div class="col-lg-2 col-md-2 col-sm-12">
                    {{HTML::image('assets/img/friends/fr-03.jpg', 'user photo', 
                        array('class' => 'img-rounded'))}}            
                </div>
                <div class="col-lg-10 col-md-10 col-sm-12">
                    <h3 class="media-heading"> Ryan </h3>
                    Ryan interest in the Internet began in a web development class he took in college. 
                    As he began his career in the late 90's, a new method of reaching consumers was taking shape. 
                    Knowledge of the way websites are built, paired with a marketing background, propelled him into 
                    an exciting field that in the last 12 years continued to grow. Prior to joining Little Helpers,
                    Ryan worked at top agencies, Channel Advisor in Raleigh, NC and iProspect in Boston, MA, 
                    providing a full spectrum of search marketing strategies.
                </div>
            </div>
                
        </div> <!-- end meet the team -->
            
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
    </div>
  </div>
</div>

</body>
@stop

@section('scripts')
@stop