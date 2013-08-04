$(document).ready(function() {
  $('.buttons').bind('mousedown', function(){
    alert('The mouse button is pressed over ' +$(this).text()+' button');
  });
});