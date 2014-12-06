<!DOCTYPE html>
<html lang="en-US">
	<head>
		<meta charset="utf-8">
	</head>
	<body>
		<h3>Welcome!</h3>

		<div>
			Welcome to Little Helpers. To confirm your registration, please click on the following link: <br>
			{{ HTML::link('account/confirm/'.$token.'?email='.$email, 'Confirm Account')}} <br/>
			
			<br>

			- Little Helpers Team

		</div>
	</body>
</html>
