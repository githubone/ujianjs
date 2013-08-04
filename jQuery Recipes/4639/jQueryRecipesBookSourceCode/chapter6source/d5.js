$(document).ready(function() {
  scroll();  
});

function scroll()
{
  $('.image').animate(
    {'left': -160}, 'slow', 
    function(){
      $('.image').css('left',150);
      $('.image').animate({'left': 0}, 'slow');
    }
  );
  setTimeout(scroll, 1200);
}