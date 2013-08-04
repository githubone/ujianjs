$(document).ready(function() {
  $('.buttons').mouseup(function(){
    alert('The mouse button is released over ' +$(this).text()+' button');
  });
});