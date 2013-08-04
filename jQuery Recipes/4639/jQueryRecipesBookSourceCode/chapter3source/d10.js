$(document).ready(function() {
  $('.buttons').hover(
    function(){
      $(this).addClass('hover');
    }, 
    function(){
      $(this).removeClass('hover');
    }
  );
});