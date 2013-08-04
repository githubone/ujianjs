$(document).ready(function() {
  $('img').css('opacity',0.4);

  $('.buttons').bind('mouseover', function(){
    $('img').css('opacity',1.0);
  });

  $('.buttons').bind('mouseout', function(){
    $('img').css('opacity',0.4);
  });

  $('.buttons').bind('mousedown', function(){
    $('img').css('width',function(){ return $(this).width()+50;});
    $('img').css('height',function(){ return $(this).height()+30;});
  });
});