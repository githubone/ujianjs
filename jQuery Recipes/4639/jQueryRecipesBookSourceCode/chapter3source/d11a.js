$(document).ready(function() {
  $('.buttons').toggle(
    function(){
      $(this).addClass('hover');
    }, 
    function(){
      $(this).removeClass('hover');
    }
  );
});