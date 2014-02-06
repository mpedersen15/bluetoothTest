$(document).on("pageinit",function(){
	$('#connectBtn').click(function(){
		$('#welcome').html('You clicked the button I see...');
		bluetoothserial.isEnabled(
			function(){
				$('#welcome').append('<p>It worked!</p>');
			},
			function(){
				$('#welcome').append("<p>It didn't work...</p>");
			}
		);
	});
});