$(document).ready(function() {
   $('img').mousedown(function(event){
    $('p').text('Mouse is clicked at horizontal cordinate: '+event.screenX+'  and at vertical cordinate: '+event.screenY);
  });
});