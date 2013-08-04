$(document).ready(function() {
  $('.image').click(function (event){ 
    $(this).animate(
      {'left': -160}, 'slow', 
      function(){
        $(this).css('left',150);
        $(this).animate({'left': 0}, 'slow');
      }
    );
  });
});
