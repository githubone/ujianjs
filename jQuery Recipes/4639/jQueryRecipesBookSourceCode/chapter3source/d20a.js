$(document).ready(function() {
  $('img').click(function(){
    $('img').animate({left: 600}, 'slow')
    $('img').slideUp('slow');
  });
});