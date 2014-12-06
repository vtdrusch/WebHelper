@extends('layouts.master')

@section('title', 'Help @ LITTLEHelpers')

@section('head')
@stop

@section('content')
<body class="cover">

<!-- CONTENT ================================================== -->
<div class="container" id="main-content">
    <div class="row">
        <div class="col-md-12"> <!-- horizontally center content -->
            <div class="row mt-contacts" id="main-content-box">
        
            <div class="centered">
                <h1 class="contact-header">Need Some Help?</h1>
                <hr>
            </div>

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
      
            <!-- Accordian Tabs -->
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                
                <div class="panel-group" id="accordion1">
                    
                <!-- Section 1 -->
                  <div class="panel panel-default" style="padding:0">
                    <div class="panel-heading">
                      <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion1" href="#collapseOne">
                      Join Little Helpers
                      </a></h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse in"> <!-- Add in at end -->
                      <div class="panel-body">
                          
                        <div class="panel-group" id="accordion1a">
                            
                         <!-- Section 1 - nested accordion #1 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion1a" href="#collapseInner1a">
                                How do I sign up for Little Helpers?
                              </a></h4>
                            </div>
                            <div id="collapseInner1a" class="panel-collapse collapse">
                              <div class="panel-body">
                                  <ol>
                                    <li>Go to the main page of our website (http://web-helper.gopagoda.com)</li>
                                    <li>Fill in the information under “Sign Up”</li>
                                    <li>Create a username for yourself (must be at least 6 characters long)</li>
                                    <li>Enter your email address</li>
                                    <li>Create a unique password (must be at least 6 characters long)</li>
                                    <li>Type in the same password from above again</li>
                                    <li>Click the “Sign Up” button</li>
                                    <li>Once you sign up, you will need to confirm your email address. 
                                        We will send you an email to the email address you provided. 
                                        Please open the email and follow the instructions to confirm your account.</li>
                                </ol>
                              </div>
                            </div>
                          </div>
                        
                        <!-- Section 1 - nested accordion #2 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion1b" href="#collapseInner1b">
                                How do I complete the signup process and confirm my email address?
                              </a></h4>
                            </div>
                            <div id="collapseInner1b" class="panel-collapse collapse">
                              <div class="panel-body">
                                  <ol>
                                      <li>To complete the sign-up process, we must confirm that you own the 
                                        email address used to set up the account. To do this, open the link 
                                        in the email we sent you when you signed up.</li>
                                      <li>Confirming your email address lets us know that we are sending your 
                                  information to the right place. </li>
                                  </ol>
                            </div>
                            </div>
                          </div>
                            
                         <!-- Section 1 - nested accordion #3 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion1c" href="#collapseInner1c">
                                Does using Little Helpers cost money?
                              </a></h4>
                            </div>
                            <div id="collapseInner1c" class="panel-collapse collapse">
                              <div class="panel-body">
                                It is completely free for you to create and maintain an account on the Little Helpers website.
                                </div>
                            </div>
                          </div>
                            
                        <!-- Section 1 - nested accordion #4 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion1d" href="#collapseInner1d">
                                How old do you have to be to sign up for Little Helpers?
                              </a></h4>
                            </div>
                            <div id="collapseInner1d" class="panel-collapse collapse">
                              <div class="panel-body">
                                To be eligible to sign up for the Little Helpers website, you must be at least 13 years old.
                              </div>
                            </div>
                          </div>
                            
                        <!-- Section 1 - nested accordion #5 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion1e" href="#collapseInner1e">
                                What is the difference between logging in and signing up?
                              </a></h4>
                            </div>
                            <div id="collapseInner1e" class="panel-collapse collapse">
                              <div class="panel-body">
                                <ol>
                                    <li>Logging In</li>
                                        <ul>
                                            <li>If you already have a Little Helpers account, you can log 
                                                into your account by entering your username and password into 
                                                the “Sign In” section of the front page of the website
                                                (http://web-helper.gopagoda.com).
                                            </li>
                                        </ul>
                                    <li>Signing Up </li>
                                        <ul>
                                            <li>If you do not have a Little Helpers account, you can sign 
                                                up for one in a few short steps.
                                                <a data-toggle="collapse" data-parent="#accordion1e" href="#collapseInner1a">
                                                <button>
                                                    Learn how to sign up for an account.
                                                </button>
                                                </a>
                                            </li>
                                        </ul> 
                                </ol>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> <!-- End Section 1 panel group -->
                    
                 <!-- Section 2 -->
                  <div class="panel panel-default" style="padding:0">
                    <div class="panel-heading">
                      <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion1" href="#collapseTwo">
                        Problems Signing Up
                      </a></h4>
                    </div>
                    <div id="collapseTwo" class="panel-collapse collapse">
                      <div class="panel-body">

                        <div class="panel-group" id="accordion2">
                            
                        <!-- Section 2 - nested accordion #1 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion2a" href="#collapseInner2a">
                                Why was my name rejected during signup?
                              </a></h4>
                            </div>
                            <div id="collapseInner2a" class="panel-collapse collapse">
                              <div class="panel-body">
                                If you can’t use the name you want, you’ve probably picked a name that’s either too short or one that has already been taken. User names must be at least 6 characters and can’t be in use by another user.
                              </div>
                            </div>
                          </div>
                        
                        <!-- Section 2 - nested accordion #2 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion2b" href="#collapseInner2b">
                                I can’t find my Little Helpers sign up confirmation email
                              </a></h4>
                            </div>
                            <div id="collapseInner2b" class="panel-collapse collapse">
                              <div class="panel-body">
                                The confirmation email may take a while to show up in your inbox. Also be sure to check your spam inbox. If the confirmation email takes longer than an hour to arrive, you can send a new confirmation email using this <a>link</a>. 
                              </div>
                            </div>
                          </div>

                        <!-- Section 2 - nested accordion #3 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion2c" href="#collapseInner2c">
                                I am seeing an error message that says there is an existing account associated 
                                  with my email address.
                              </a></h4>
                            </div>
                            <div id="collapseInner2c" class="panel-collapse collapse">
                              <div class="panel-body">
                                Each account has to be associated with a unique email address. If you are seeing that your email address is already being used on our website, you may have already created an account. Follow this <a>link</a> if you are unable to access your account, and we can reset your password. If you believe that you have not created an account with us before, and that you are receiving this message in error, contact us <a>here</a>.
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div> <!-- End Section 2 Panel Group -->
                    
                <!-- Section 3 -->
                  <div class="panel panel-default" style="padding:0">
                    <div class="panel-heading">
                      <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion1" href="#collapseThree">
                        Login &amp; Password
                      </a></h4>
                    </div>
                    <div id="collapseThree" class="panel-collapse collapse">
                      <div class="panel-body">

                        <div class="panel-group" id="accordion3">
                            
                        <!-- Section 3 - nested accordion #1 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion3a" href="#collapseInner3a">
                                How do I reset my password?
                              </a></h4>
                            </div>
                            <div id="collapseInner3a" class="panel-collapse collapse">
                              <div class="panel-body">
                                  <ol>
                                    <li> If you're logged into your Little Helpers account,
                                        you can change your password from your settings. From there:</li>
                                    </li>
                                      <ol>
                                            <li>Click Password</li>
                                            <li>Type your current and new password</li>
                                            <li>Click Save Changes</li>
                                      </ol>
                                    <li> If you can't log into Little Helpers and need to reset your password.</li>
                                        <ol>
                                            <li>Go to the login page at http://web-helper.gopagoda.com</li>
                                            <li>In the top right, click Forgot your password?</li>
                                            <li>Type the email and username associated with your account, then click Search and follow the on-screen instructions</li>
                                        </ol>
                                  </ol>
                            </div>
                            </div>
                          </div>
                        
                        <!-- Section 3 - nested accordion #2 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion3b" href="#collapseInner3b">
                                What is the minimum password strength?
                              </a></h4>
                            </div>
                            <div id="collapseInner3b" class="panel-collapse collapse">
                              <div class="panel-body">
                                Passwords must be at least 6 characters long and contain at least 1 letter and 1 number.              
                                </div>
                            </div>
                          </div>

                        <!-- Section 3 - nested accordion #3 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion3c" href="#collapseInner3c">
                                How do I change the password for the email address I use to log into Little Helpers?
                              </a></h4>
                            </div>
                            <div id="collapseInner3c" class="panel-collapse collapse">
                              <div class="panel-body">
                                The password for your email address is controlled by your email account provider. Please refer to the help section for the email provider you are using for more information.
                              </div>
                            </div>
                          </div>
                            
                        <!-- Section 3 - nested accordion #4 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion3d" href="#collapseInner3d">
                                I can’t log in to my account.
                              </a></h4>
                            </div>
                            <div id="collapseInner3d" class="panel-collapse collapse">
                              <div class="panel-body">
                                  First, make sure that you’ve spelled your username and password correctly.
                                  Ensure that caps-lock isn’t turned on and make sure that you’ve confirmed your 
                                  login email address. If you still can’t access your account or have forgotten 
                                  your password, you can reset your password by following <a>link</a>.   
                                </div>
                            </div>
                          </div>
    
                        <!-- Section 3 - nested accordion #5 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion3e" href="#collapseInner3e">
                                How do I log out of Little Helpers?
                              </a></h4>
                            </div>
                            <div id="collapseInner3e" class="panel-collapse collapse">
                              <div class="panel-body">
                                To log out, all you need to do is click on your user name in the upper right-hand corner of the screen and select “Signout” from the dropdown menu.
                                </div>
                            </div>
                          </div>

                        <!-- Section 3 - nested accordion #6 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion3f" href="#collapseInner3f">
                                I think my account was hacked or someone is using it without my permission!
                              </a></h4>
                            </div>
                            <div id="collapseInner3f" class="panel-collapse collapse">
                              <div class="panel-body">
If you believe your account has been compromised, first try to log in and change your password. If you cannot access your account, you can reset your password by clicking <a>this link</a>. If you do not get a password reset link in your email inbox or cannot access your email account, contact us and we will suspend your account until the issue can be resolved.
                                </div>
                            </div>
                          </div>

                        </div>
                        </div>
                      </div>
                    </div> <!-- End Section 3 Panel Group -->

                <!-- Section 4 -->
                  <div class="panel panel-default" style="padding:0">
                    <div class="panel-heading">
                      <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion1" href="#collapseFour">
                        Forum
                      </a></h4>
                    </div>
                    <div id="collapseFour" class="panel-collapse collapse">
                      <div class="panel-body">

                        <div class="panel-group" id="accordion4">
                            
                        <!-- Section 4 - nested accordion #1 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion4a" href="#collapseInner4a">
                                	What are the rules of using the forum?
                              </a></h4>
                            </div>
                            <div id="collapseInner4a" class="panel-collapse collapse">
                              <div class="panel-body">
                                  <ol>
                                    <li>Don’t spam (make a lot of small posts very rapidly).</li>
                                    <li>Don’t post personal information about other people.</li>
                                    <li>In general, remember to respect the privacy of others. If you need to communicate private information to someone, send it to them via email or direct message. Any posts you make on the forum will be visible to everyone who visits the site.</li>
                                    <li>Don’t post anything illegal. Any discussions related to illicit substances or activities will be removed and the police will be notified.</li>
                                  </ol>
                            </div>
                            </div>
                          </div>
                        
                        <!-- Section 4 - nested accordion #2 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion4b" href="#collapseInner4b">
                                	How do I post something on the forum?
                              </a></h4>
                            </div>
                            <div id="collapseInner4b" class="panel-collapse collapse">
                              <div class="panel-body">
                                  
                                    To start posting on the forum, simply navigate to the forum page by clicking the “Forum” link at the top of the screen. 
                                  <ol>
                                      <li>Once you’re there, select which forum sub-category you’d like to browse by clicking on it in the category list on the left side of the screen. You should now be able to see a list of all the topics created in that category.</li> 
                                      <li>From there, you can either create your own topic by clicking on the “New Topic” button in the upper right corner of the topic list, or select an existing topic by clicking on the name of the topic.</li>
                                      <li>You can reply to an existing topic by clicking on the “Reply” button in the top right corner of the topic once the topic is selected.</li>

                                </div>
                            </div>
                          </div>

                        <!-- Section 4 - nested accordion #3 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion4c" href="#collapseInner4c">
                                How do I delete something I posted on the forum?
                              </a></h4>
                            </div>
                            <div id="collapseInner4c" class="panel-collapse collapse">
                              <div class="panel-body">
                                ??.
                              </div>
                            </div>
                          </div>
                            
                        <!-- Section 4 - nested accordion #4 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion4d" href="#collapseInner4d">
                                How do I report illegal content?
                              </a></h4>
                            </div>
                            <div id="collapseInner4d" class="panel-collapse collapse">
                              <div class="panel-body">
                                  Please send us an email using the contact form at the bottom of this page.   
                                </div>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div> <!-- End Section 4 Panel Group -->

                <!-- Section 5 -->
                  <div class="panel panel-default" style="padding:0">
                    <div class="panel-heading">
                      <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion1" href="#collapseFive">
                        Editing Your Account
                      </a></h4>
                    </div>
                    <div id="collapseFive" class="panel-collapse collapse">
                      <div class="panel-body">

                        <div class="panel-group" id="accordion5">
                            
                        <!-- Section 5 - nested accordion #1 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion5a" href="#collapseInner5a">
                                Where can I find my account settings?
                              </a></h4>
                            </div>
                            <div id="collapseInner5a" class="panel-collapse collapse">
                              <div class="panel-body">
                                  To find your account settings, all you need to do is click on your user name in the upper right-hand corner of the screen and select “Settings” from the dropdown menu.
                            </div>
                            </div>
                          </div>
                        
                        <!-- Section 5 - nested accordion #2 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion5b" href="#collapseInner5b">
                                	How do I change my email address?
                              </a></h4>
                            </div>
                            <div id="collapseInner5b" class="panel-collapse collapse">
                              <div class="panel-body">
                                ??
                                </div>
                            </div>
                          </div>

                        <!-- Section 5 - nested accordion #3 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion5c" href="#collapseInner5c">
                                How do I edit my profile photo?
                              </a></h4>
                            </div>
                            <div id="collapseInner5c" class="panel-collapse collapse">
                              <div class="panel-body">
                                ??.
                              </div>
                            </div>
                          </div>
                            
                        <!-- Section 5 - nested accordion #4 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion5d" href="#collapseInner5d">
                                Who can see my profile photo?
                              </a></h4>
                            </div>
                            <div id="collapseInner5d" class="panel-collapse collapse">
                              <div class="panel-body">
                                    Everyone using the website can see your user photo (even if they are not a member of the site).   
                                </div>
                            </div>
                          </div>
                            
                        <!-- Section 5 - nested accordion #5 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion5e" href="#collapseInner5e">
                                How do I add or change my profile picture?
                              </a></h4>
                            </div>
                            <div id="collapseInner5e" class="panel-collapse collapse">
                              <div class="panel-body">
                                    ??.   
                                </div>
                            </div>
                          </div>
                            
                        <!-- Section 5 - nested accordion #6 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion5f" href="#collapseInner5f">
                                How do I delete my account?
                              </a></h4>
                            </div>
                            <div id="collapseInner5f" class="panel-collapse collapse">
                              <div class="panel-body">
                                    ??.   
                                </div>
                            </div>
                          </div>

                        <!-- Section 5 - nested accordion #7 -->
                          <div class="panel panel-default">
                            <div class="panel-heading-subheading">
                              <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion5g" href="#collapseInner5g">
                                How do I change my username?
                              </a></h4>
                            </div>
                            <div id="collapseInner5g" class="panel-collapse collapse">
                              <div class="panel-body">
                                    You can not change your username.   
                                </div>
                            </div>
                          </div>
                            
                        </div>
                        </div>
                      </div>
                    </div> <!-- End Section 5 Panel Group -->

                  </div> <!-- End Panel Group -->
            </div> <!-- End Accordian Tabs -->
                
                
            <!-- horizontally center content -->
            <!-- CONTACT US ================================================== -->
            <div class="centered">
                <div class="panel panel-default" style="padding:20px 30px">
                    <h2>Contact Little Helpers</h2>
                    <p>
                      Email us at <a href="mailto:pandabears-l@mtu.edu">pandabears-l@mtu.edu</a> 
                      or fill out the form below
                    </p>
                    <br>
                    {{ Form::open(array('url' => 'contact', 'class' => 'form-horizontal', 'role' => 'form')) }}
                      <div class="form-group">
                        <label class="col-sm-1 control-label" style="padding-top: 0"> Name: </label>
                        <div class="col-sm-4">
                          <input type="text" class="form-control intput-lg" name="name" placeholder="" />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-1 control-label" style="padding-top: 0"> Email: </label>
                        <div class="col-sm-4">
                          <input type="text" class="form-control intput-lg" name="email" placeholder="" />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-1 control-label" style="padding-top: 0"> Issue: </label>
                        <div class="col-sm-10 ">
                          <textarea rows="8" type="text" class="form-control intput-lg" 
                                    name="issue" placeholder=""></textarea>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="col-sm-offset-9 col-sm-1">
                          <button class="btn btn-primary" type="submit">Send</button>
                        </div>
                      </div>
                    {{ Form::close() }}
                </div> <!-- end panel -->
            </div>
            </div>
        </div>
   </div>
</div>

</body>

@stop

@section('scripts')
@stop