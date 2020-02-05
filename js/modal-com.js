
/**********************/
$(function() {
	$('.certificate').click( function(event){
		event.preventDefault();
		$('.ex').fadeIn(400,
		 	function(){
				$('.modal-commentmod')
					.css('display', 'block')
					.animate({opacity: 1, top: '15%'}, 200);
		});
	});
	$('.exit-but, .ex').click( function(){
		$('.modal-commentmod')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('.ex').fadeOut(400); 
				}
			);
	});
});

