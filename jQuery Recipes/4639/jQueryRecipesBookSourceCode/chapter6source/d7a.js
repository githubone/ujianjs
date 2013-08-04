$(document).ready(function() {
  var $wrapper=$('#scroller a img');
  $wrapper.css({bottom:750});    
  var animator = function(imgblock) {
    imgblock.animate(
      {bottom:-460}, 5000,  
      function() {
        imgblock.css({bottom:750});
        animator($(this));
      }
    );
  }
  animator($wrapper);
});