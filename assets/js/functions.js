$( document ).ready(function() {



	$( ".nav-toggle" ).on( "click", function() {
  		$('.mobilenav').slideToggle('is-open')
});

	$( ".nav-testimonial a" ).on( "click", function(event) {

		event.preventDefault();
      $(this).addClass('activeon').siblings().removeClass('activeon');
  		var people=$(this).attr('data-people');
  	   
  		var id=$('#'+ people);
  		console.log(id);
  		$(id).addClass('slide-show animation-target').siblings().removeClass('slide-show animation-target')
		});

smoothScroll(1000);
  	
});


function smoothScroll (duration) {
  $('a[href^="#"]').on('click', function(event) {

      var target = $( $(this).attr('href') );

      if( target.length ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
          }, duration);
      }
  });
}