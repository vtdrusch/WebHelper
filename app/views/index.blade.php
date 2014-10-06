<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <title>OurHelper</title>
        <link rel="stylesheet" type="text/css" href="assets/css/my-bootstrap-theme.css">
        <script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
        <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
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
                    <li><a href="signIn.html" target="_blank" class="btn btn-md btn-info">Sign In</a></li>
                </ul>
            </div>
        </div>
    </nav>
        
    
    <!-- fluid layout -->
    <div class="container">
        
        <!-- Carousel
        ================================================== -->
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
 
          <!-- Indicators (Small circles at bottom center of the slider) -->
          <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          </ol>

          <!-- Slider Content (Wrapper for slides )-->
          <div class="carousel-inner">
            
            <div class="item active">
              <img src="img/Sargent.jpg" alt="weird family">
              <div class="carousel-caption">
                <h1>Connect with other parents who have kids with special needs.</h1>
                <p><a href="#about" target="_blank" class="btn btn-lg btn-info">Sign Up Now</a></p>
              </div>
            </div>

            <div class="item">
              <img src="img/MaryCassatt.jpg" alt="weird family">
              <div class="carousel-caption">
                <h1>Learn about local resources</h1>
                <p><a href="#about" target="_blank" class="btn btn-lg btn-info">Sign Up Now</a></p>
                </div>
            </div>  
            
            <div class="item">
              <img src="img/Degas.jpg" alt="weird family">
              <div class="carousel-caption">
                <h1>Do more things</h1>
                <p><a href="#about" target="_blank" class="btn btn-lg btn-info">Sign Up Now</a></p>
              </div>
            </div> 
              
          </div>

           <!-- Controls -->
          <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
          </a>
          <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
          </a>

        </div>
                    
        
    <!-- Marketing messaging and featurettes
    ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <!-- Add extra space between rows -->
    <div class="row">&nbsp;</div>
    <div class="row">&nbsp;</div>

    <div class="container marketing">
        
        <!-- Pictures
        ================================================== -->
        <!-- Wrap the rest of the page in another container to center all the content. -->
        <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-2">
                <a href="#" class="thumbnail">
                    <img src="img/Sargent.jpg" alt="125x125">
                </a>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-2">
                <a href="#" class="thumbnail">
                    <img src="img/Sargent.jpg" alt="125x125">
                </a>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-2">
                <a href="#" class="thumbnail">
                    <img src="img/Sargent.jpg" alt="125x125">
                </a>
            </div>
        </div>

        <!-- Information
        ================================================== -->
        <!-- Wrap the rest of the page in another container to center all the content. -->
        <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-2">
                <h2>HTML</h2>
                <p>HTML is a markup language that is used for creating web pages. The HTML tutorial section will help you understand the basics of HTML, so that you can create your own web pages or website.</p>
                <p><a href="http://www.tutorialrepublic.com/html-tutorial/" target="_blank" class="btn btn-success">Learn More &raquo;</a></p>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-2">
                <h2>CSS</h2>
                <p>CSS is used for describing the presentation of web pages. The CSS tutorial section will help you learn the essentials of CSS, so that you can fine control the style and layout of your HTML document.</p>
                <p><a href="http://www.tutorialrepublic.com/css-tutorial/" target="_blank" class="btn btn-success">Learn More &raquo;</a></p>
            </div>
            <div class="clearfix visible-sm-block"></div>
            <div class="col-sm-6 col-md-4 col-lg-2">
                <h2>Bootstrap</h2>
                <p>Twitter Bootstrap is a powerful front-end framework for faster and easier web development. The Twitter Bootstrap tutorial section will help you learn the techniques of Bootstrap so that you can create web your own website with much less efforts.</p>
                <p><a href="http://www.tutorialrepublic.com/twitter-bootstrap-tutorial/" target="_blank" class="btn btn-success">Learn More &raquo;</a></p>
            </div>
            <div class="clearfix visible-md-block"></div>
            <div class="col-sm-6 col-md-4 col-lg-2">
                <h2>References</h2>
                <p>The references section outlines all the standard HTML tags and CSS properties along with other useful references such as color names and values, symbols and character entities, web safe fonts, language codes, HTTP messages and much more.</p>
                <p><a href="http://www.tutorialrepublic.com/twitter-bootstrap-tutorial/" target="_blank" class="btn btn-success">Learn More &raquo;</a></p>
            </div>
            <div class="clearfix visible-sm-block"></div>
            <div class="col-sm-6 col-md-4 col-lg-2">
                <h2>Examples</h2>
                <p>The examples section encloses an extensive collection of examples on various topic that you can try and test yourself using online HTML editor.</p>
                <p><a href="http://www.tutorialrepublic.com/twitter-bootstrap-tutorial/" target="_blank" class="btn btn-success">Learn More &raquo;</a></p>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-2">
                <h2>FAQ</h2>
                <p>The collection of Frequently Asked Questions (FAQ) provides brief answers to many common questions related to web design and development.</p>
                <p><a href="http://www.tutorialrepublic.com/twitter-bootstrap-tutorial/" target="_blank" class="btn btn-success">Learn More &raquo;</a></p>
            </div>
        </div>
        
        <hr>
        
        <!-- Footer
        ================================================== -->
        <div class="row">
            <div class="col-sm-12">
                <footer>
                    <p>&copy; Copyright Nicole, Julio, Ryan, Vincent, Michael</p>
                </footer>
            </div>
        </div>
        
    </div>
</body>
</html>
