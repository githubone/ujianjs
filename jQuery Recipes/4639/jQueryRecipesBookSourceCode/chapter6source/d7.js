$(document).ready(function() {
  var $wrapper=$('#scroller');
  $wrapper.css({overflow: 'hidden'});    
  var animator = function(imgblock) {
    imgblock.animate(
      {bottom:"-" + imgblock.height() + "px"}, 5000,  
      function() {
        $(this).css({ bottom:imgblock.height()});
        animator($(this));
      }
    );
  }
  animator($wrapper);
});