<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <title>Sign Into Our Helper</title>
        <link rel="stylesheet" type="text/css" href="less/my-bootstrap-theme.css">
        <script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
        <script type="text/javascript" src="bootstrap/dist/js/bootstrap.min.js"></script>
    </head>

    <body>
    
    <!-- NAVBAR
    ================================================== -->
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
                <a class="navbar-brand" href="#">OurHelper</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="nav navbar-nav navbar-left">
                    <li class="active"><a href="http://www.tutorialrepublic.com" target="_blank">Forum</a></li>
                    <li><a href="#about" target="_blank">Resources</a></li>
                    <li><a href="#about" target="_blank">About Us</a></li>
                    <li><a href="#about" target="_blank">Contact</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#about" target="_blank">Sign Up</a></li>
                    <li><a href="#about" target="_blank" class="btn btn-md btn-info">Sign In</a></li>
                </ul>
            </div>
        </div>
    </nav>
        
    <!-- Footer
    ================================================== -->
        <!-- Add extra space between rows -->
    <div class="row">&nbsp;</div>
    <div class="row">&nbsp;</div>
    <div class="row">&nbsp;</div>

    <div class="container">

            <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-2">
                <a href="#" class="thumbnail">
                </a>
            </div>
                
            <div class="col-sm-6 col-md-4 col-lg-2">
                <form class="form-signin" role="form">
                    <h2 class="form-signin-heading">Please sign in</h2>
                    <input type="email" class="form-control" placeholder="Email address" required autofocus>
                    <input type="password" class="form-control" placeholder="Password" required>
                    <label class="checkbox">
                        <input type="checkbox" value="remember-me"> Remember me
                    </label>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </div>
                
            <div class="col-sm-6 col-md-4 col-lg-2">
                <a href="#" class="thumbnail">
                </a>
            </div>
        </div>        
    </div>
</body>
</html>