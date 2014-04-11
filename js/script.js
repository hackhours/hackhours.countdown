
$(document).ready(function(){
	/* ------------------------------------------------------------------------ */
	/* Countdown */
	/* ------------------------------------------------------------------------ */
	
	/* ---- Countdown timer ---- */
	$('#counter').countdown({	
		timestamp : new Date(2014, 04, 12, 18, 0, 0, 0).getTime()
	});
	
	// Hide the countdown
	$('#counter').hide();
	// Add behaviour on body's click
	$('body').click(function() {
		$('#pre-counter').text('5');
		var sec = $('#pre-counter').text();
		var timer = setInterval(function() {
			if (sec == 1) {
				$('#pre-counter').remove();
				$('#counter').fadeIn();
				clearInterval(timer);
			}
			else{
				$('#pre-counter').fadeOut('fast');
				$('#pre-counter').text(--sec);
				$('#pre-counter').fadeIn('fast');
			}
		}, 1000);
	});
});

