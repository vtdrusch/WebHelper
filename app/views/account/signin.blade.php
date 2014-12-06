@extends('layouts.master')

@section('title', 'Signin @ LITTLEHelpers')

@section('head')
@stop

@section('content')
<!-- CONTENT ================================================== -->
<div class="container">
  <div class="row">
    <div class="col-md-10 col-md-offset-1">
      @if(Session::has('message')) <?php $message = Session::get('message') ?> @endif
      @if(isset($message))
        <div role="alert" class="alert alert-{{$message['type']}} fade in">
          <h4>{{$message['message']}}</h4>
		  @if(isset($id))
			<h4>Didn't get the message? Click <a href="#" onclick="resend();" id="resend" data-id="{{ $id }}"> here </a> to resend.</h4>
		  @endif
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
    <!-- SIGN IN ================================================== -->
    <div class="col-md-4 col-md-offset-4">
      <div class="panel panel-default">
        <h2>Sign In</h2>
         {{ Form::open(array('url' => 'account/signin')) }}
          <p class="input-group">
            <span class="input-group-addon"><i class="fa fa-user fa-lg"></i></span>
            <input type="text" class="form-control intput-lg" name="username" placeholder="Username" />
          </p>
          <p class="input-group">
            <span class="input-group-addon"><i class="fa fa-asterisk fa-lg"></i></span>
            <input type="password" class="form-control intput-lg" name="password" placeholder="Password" />
          </p>
          <p class="text-right">
            <button type="submit" class="btn btn-primary btn-md"> Sign In </button>
          </p>
          <p class="text-right">
            {{HTML::link('account/reset', 'Forgot Password?')}}
          </p>
        {{ Form::close() }}
      </div>
    </div>
  </div>
</div>
@stop

@section('scripts')

<script type="text/javascript">
function resend() {
	var id = $('#resend').val();
    var userid = $('#resend').attr("data-id");
	var _token = "{{ csrf_token() }}";
	
    $.ajax(
    {
        url: "{{ URL::to('account/resend') }}",
        type: "POST",
        data: {id : userid, _token : _token },
        dataType: "json",
		
		success:function(data, textStatus, jqXHR)
        {
			alert('Confirmation email sent successfully!\n Check your inbox in a few minutes.');
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
			alert('Uh-oh! Something went wrong, try again.');
        }
    });
}
</script>

@stop


