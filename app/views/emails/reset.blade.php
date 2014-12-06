<!DOCTYPE html>
<html lang="en-US">
	<head>
		<meta charset="utf-8">
	</head>
	<body>

		<div>
			Hello {{{$name}}}, <br/> <br/>

			To reset your password, please click on the following link: <br/>
			{{ HTML::link('account/reset-password/'.$token, 'Reset Password')}} <br/>
			
			<br>

			- Little Helpers Team

		</div>
	</body>
</html>
