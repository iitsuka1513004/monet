$(function(){
  $('.regular').slick({
    autoplay: true, // 自動再生を設定
    autoplaySpeed: 4000, // 自動再生のスピード（ミリ秒単位）
  });

  
  $('.slider').slick();


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


