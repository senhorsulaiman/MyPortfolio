$( document ).ready(function() {
   var allprojects=$(".allprojects");



	$( ".nav-toggle" ).on( "click", function() {
  		$('.mobilenav').slideToggle('is-open');
});

	$( ".nav-testimonial a" ).on( "click", function(event) {

		event.preventDefault();
      $(this).addClass('activeon').siblings().removeClass('activeon');
  		var people=$(this).attr('data-people');
  	   
  		var id=$('#'+ people);
  		console.log(id);
  		$(id).addClass('slide-show animation-target').siblings().removeClass('slide-show animation-target')
		});



$(".projectshow").on('click',function(){

   var project=$(this).attr('data-pro');
   
     var viewproject=$('#'+ project);
     console.log(viewproject);
     $(viewproject).addClass('active-pro').siblings().removeClass('active-pro');

    console.log('hi');
   
    allprojects.animate({
    marginLeft:"-50%"
}, 500,function(){

     allprojects.css({'display':'none'});




});





  });


$('.back').on('click',function(event){

   event.preventDefault();
  allprojects.css({'display':'block'});

 
    allprojects.animate({
    marginLeft:"0%"
}, 500,function(){

        
 


});

});




$('.send').on('click',function(){

  console.log('hey ');


 // $('.contact-overlay').addClass('success');








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