$(document).ready(function() {
  $('img').click(function(){
    $('img').animate(
      {left: 600}, 
      'slow', 
      function(){
        $('img').fadeTo('slow',0)
      }
    );
  });
});