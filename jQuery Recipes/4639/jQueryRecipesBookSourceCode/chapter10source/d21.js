$(document).ready(function() {
  $(a).hover(
    function(){
      $(this).css({'cursor': 'wait', 'color': 'blue' , 'background-color':'cyan'});
    }, 
    function(){
      $(this).css({'cursor': 'default', 'color': '#000000' , 'background-color':'#ffffff'});
    });
});