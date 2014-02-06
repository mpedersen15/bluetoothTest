$(document).on("pageinit",function(){
	$('#connectBtn').click(function(){
		$('#welcome').css('background-color','lightblue');
		$('#welcome').css('color','white');
		/* bluetoothSerial.isEnabled(
			function(){
				$('#welcome').append('<p>It worked!</p>');
			},
			function(){
				$('#welcome').append("<p>It didn't work...</p>");
			}
		); */
	});
});