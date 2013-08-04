$(document).ready(function() {
  $('.buttons').mousedown(function(event){
    if(event.button==1){
      $('p').text('Left mouse button is pressed');
    }
    else
    {
      $('p').text('Right mouse button is pressed');
    }
  });
});