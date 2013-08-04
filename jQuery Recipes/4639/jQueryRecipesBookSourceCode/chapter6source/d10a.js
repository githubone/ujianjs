$(document).ready(function() {   
  $(".small a").hover(
    function(){
      $(this).find('img').css({'width':200,'height': 200});
    }, 
    function(){
      $(this).find('img').css({'width':60,'height': 60});
    }
  );
});   