$(document).ready(function() {
  var $wrapper=$('#scroller a img');
  $wrapper.css({top:0});    
  var animator = function(imgblock) {
    imgblock.animate(
      {top:-770}, 5000,  
      function() {
        imgblock.css({top:450});
        animator($(this));
      }
    );
  }
  animator($wrapper);
});