$(document).ready(function() {
  var $wrapper=$('#scroller a img');

  var leftanimator = function(imgblock) {
    imgblock.animate({left:-310 }, 2000);
  }

  var rightanimator = function(imgblock) {
    imgblock.animate({left:0 }, 2000);
  }

  $('.leftarrow').click(function(event){
    leftanimator($wrapper);
    event.preventDefault();
  });

  $('.rightarrow').click(function(event){
    rightanimator($wrapper);
    event.preventDefault();
  });
});