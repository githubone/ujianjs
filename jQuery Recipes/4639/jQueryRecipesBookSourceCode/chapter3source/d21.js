$(document).ready(function() {
  $('.infobox').keypress(function(event){
    $('p').text('Character typed is: '+event.keyCode);
  });
});
