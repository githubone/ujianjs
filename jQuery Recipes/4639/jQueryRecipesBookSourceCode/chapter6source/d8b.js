$(document).ready(function() {
  var $wrapper=$('#scroller a img');
  $wrapper.css({right:0});    
  var animator = function(imgblock) {
    imgblock.animate({
      right:-460}, 5000,  
      function() {
        imgblock.css({ right:770});
        animator($(this));
      }
    );
  }
  animator($wrapper);
});