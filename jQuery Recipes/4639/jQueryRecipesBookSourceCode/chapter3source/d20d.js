$(document).ready(function() {
  $('img').click(function(){
    $('img').animate(
      {left: 600}, 
      'slow', 
      function(){
        $('img').fadeTo('slow',0);
        $('img').fadeTo('slow',1);
        $('img').animate({left: 0}, 'slow')
      }
    );
  });
});