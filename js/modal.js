$(function() {
	$('.download-template').click( function(event){
		event.preventDefault();
		$('.ex').fadeIn(400,
		 	function(){
				$('.modal-form-download')
					.css('display', 'block')
					.animate({opacity: 1, top: '20%'}, 200);
		});
	});
	$('.exit-but, .ex').click( function(){
		$('.modal-form-download')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('.ex').fadeOut(400); 
				}
			);
	});
});

/**********************/
$(function() {
	$('.certificate').click( function(event){
		event.preventDefault();
		$('.ex').fadeIn(400,
		 	function(){
				$('.modal-certificate')
					.css('display', 'block')
					.animate({opacity: 1, top: '15%'}, 200);
		});
	});
	$('.exit-but, .ex').click( function(){
		$('.modal-certificate')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('.ex').fadeOut(400); 
				}
			);
	});
});

/***********************/
$(function() {
	$('.public').click( function(event){
		event.preventDefault();
		$('.ex').fadeIn(400,
		 	function(){
				$('.modal-public')
					.css('display', 'block')
					.animate({opacity: 1, top: '30%'}, 200);
		});
	});
	$('.exit-but, .ex').click( function(){
		$('.modal-public')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('.ex').fadeOut(400); 
				}
			);
	});
});

/***************Загуржен************/
$(function() {
	$('.public-ok').click( function(event){
		event.preventDefault();
		$('.ex').fadeIn(400,
		 	function(){
				$('.modal-public-ok')
					.css('display', 'block')
					.animate({opacity: 1, top: '30%'}, 200);
		});
	});
	$('.publicOK, .ex').click( function(){
		$('.modal-public-ok')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('.ex').fadeOut(400); 
				}
			);
	});
});

/***************Отказ******************/
$(function() {
	$('.public-false').click( function(event){
		event.preventDefault();
		$('.ex').fadeIn(400,
		 	function(){
				$('.modal-public-false')
					.css('display', 'block')
					.animate({opacity: 1, top: '30%'}, 200);
		});
	});
	$('.okexit, .ex').click( function(){
		$('.modal-public-false')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('.ex').fadeOut(400); 
				}
			);
	});
});

/*******************удалить*******************/
$(function() {
	$('.public-delete').click( function(event){
		event.preventDefault();
		$('.ex').fadeIn(400,
		 	function(){
				$('.modal-public-delete')
					.css('display', 'block')
					.animate({opacity: 1, top: '30%'}, 200);
		});
	});
	$('.okexit, .ex').click( function(){
		$('.modal-public-delete')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('.ex').fadeOut(400); 
				}
			);
	});
});

/***********************удаление******************/
$(function() {
	$('.deleting').click( function(event){
		event.preventDefault();
		$('.ex').fadeIn(400,
		 	function(){
				$('.modal-deleting')
					.css('display', 'block')
					.animate({opacity: 1, top: '30%'}, 200);
		});
	});
	$('.okexit, .ex').click( function(){
		$('.modal-deleting')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('.ex').fadeOut(400); 
				}
			);
	});
});

/******************/
$(function() {
	$('.delete-ok').click( function(event){
		event.preventDefault();
		$('.ex').fadeIn(400,
		 	function(){
				$('.modal-delete-ok')
					.css('display', 'block')
					.animate({opacity: 1, top: '30%'}, 200);
		});
	});
	$('.publicOK, .ex').click( function(){
		$('.modal-delete-ok')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('.ex').fadeOut(400); 
				}
			);
	});
});

/**************************/
$(function() {
	$('.deleting-false').click( function(event){
		event.preventDefault();
		$('.ex').fadeIn(400,
		 	function(){
				$('.modal-deleting-false')
					.css('display', 'block')
					.animate({opacity: 1, top: '30%'}, 200);
		});
	});
	$('.okexit, .ex').click( function(){
		$('.modal-deleting-false')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('.ex').fadeOut(400); 
				}
			);
	});
});








