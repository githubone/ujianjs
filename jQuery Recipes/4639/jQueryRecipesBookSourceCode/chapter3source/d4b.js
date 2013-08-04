$(document).ready(function() {
  $('.buttons').mouseover(function(){
    alert('The mouse is over ' +$(this).text()+' button');
  });
});