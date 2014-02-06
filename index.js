$(document).on("pageinit",function(){
	$('#connectBtn').click(function(){
		bluetoothSerial.isEnabled(
			function(){
				$('#welcome').append('<p>It worked!</p>');
			},
			function(){
				$('#welcome').append("<p>It didn't work...</p>");
			}
		);
	});
}