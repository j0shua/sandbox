$(function(){
	$overlay = $("#hb-overlay");

	$("#health-bar-run").click(function(){

		$overlay.animate({'width': 0}, 1500);

		/* auto reset
		$overlay.queue(function(){
			x = $(this);
			$(this).css({width: '100%'});
		});
		*/
	});
	$("#health-bar-reset").click(function(){
		$overlay.css({width: '100%'});
	});
});