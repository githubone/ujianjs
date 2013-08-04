$(document).ready(function() {
  var $wrapper=$('#scroller p');
  $wrapper.css({top:0});    
  var animator = function(imgblock) {
    imgblock.animate(
      {top:-350}, 5000,  
      function() {
        imgblock.css({top:250});
        animator($(this));
      }
    );
  }
  animator($wrapper);
});