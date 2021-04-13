/*** menu
 */
 var $nav   = $('#navArea');
 var $btn   = $('.toggle_btn');
 var $mask  = $('#mask');
 var open   = 'open'; 
 // class
 // menu open close
 $btn.on( 'click', function() {
   if ( ! $nav.hasClass( open ) ) {
     $nav.addClass( open );
   } else {
     $nav.removeClass( open );
   }
 });
 // mask close
 $mask.on('click', function() {
   $nav.removeClass( open );
 });
 


//  FOG

 setInterval(function(){
  $('#fog').toggleClass('clearfog');
},5000);

$(document).on('scroll',function(){
  if(!$('#fog').hasClass('clearfog')){
    $('#fog').css('transition-duration','0.2s');
    $('#fog').addClass('clearfog');
  }
  else{
    $('#fog').css('transition-duration','2s');
  }
});

$(document).on('scroll',function(){
  if(!$('#fog2').hasClass('clearfog')){
    $('#fog2').css('transition-duration','0.2s');
    $('#fog2').addClass('clearfog');
  }
  else{
    $('#fog2s').css('transition-duration','2s');
  }
});


//  scroll
//  var scrollAnimationElm = document.querySelectorAll('.sa');
// var scrollAnimationFunc = function() {
//   for(var i = 0; i < scrollAnimationElm.length; i++) {
//     var triggerMargin = 300;
//     if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
//       scrollAnimationElm[i].classList.add('show');
//     }
//   }
// }
// window.addEventListener('load', scrollAnimationFunc);
// window.addEventListener('scroll', scrollAnimationFunc);