$(document).ready(function() {
  var $wrapper=$('#scroller a img');
  $wrapper.css({left:0});    
  var animator = function(imgblock) {
    imgblock.animate(
      {left:-770}, 5000,  
      function() {
        imgblock.css({left:450});
        animator($(this));
      }
    );
  }
  animator($wrapper);

  $wrapper.hover(
    function(){
      $wrapper.stop();
    }, 
    function(){
      animator($wrapper);
    }
  );
});