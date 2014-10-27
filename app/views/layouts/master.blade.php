<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>
      @yield('title', 'LITTLEhelpers')
    </title>

    <!-- Bootstrap core CSS -->
    <!--<link rel="stylesheet" type="text/css" href="less/my-bootstrap-theme.css">-->
    {{HTML::style('assets/css/my-bootstrap-theme.css')}}

    <!-- Custom styles for this template -->
    {{HTML::style('assets/css/custom-theme.css')}}

    <!-- Custom font -->
    {{HTML::style('//fonts.googleapis.com/css?family=Patua+One')}}
      
    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="../../assets/js/ie-emulation-modes-warning.js"></script>

    <!-- Latest compiled and minified JavaScript -->
    {{HTML::script('//code.jquery.com/jquery-2.1.1.min.js')}}
    {{HTML::script('//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js')}}

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    @yield('head')
    
  </head>

  <body>
    <!-- NAVBAR ================================================== -->
    <nav id="myNavbar" class="navbar navbar-inverse navbar-fixed-top" role="navigation"> <!-- Fixed to top of screen -->
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          {{HTML::link("/home", 'LITTLEHelpers', array('class'=>'navbar-brand'))}}
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="nav navbar-nav navbar-left">
          	<li>{{HTML::link("/forum", 'Forum')}}</li>
          	<li>{{HTML::link("/resources", 'Resources')}}</li>
          	<li>{{HTML::link("/about", 'About')}}</li>
          	<li>{{HTML::link("/contact", 'Contact')}}</li>
            <li>{{HTML::link("account/profile", 'Profile')}}</li>

          </ul>
        </div>
      </div>
    </nav>

    <!-- CONTENT ================================================ -->
    @yield('content')
  </body>

  @yield('scripts')

</html>
