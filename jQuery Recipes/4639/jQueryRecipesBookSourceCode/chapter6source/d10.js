$(document).ready(function() {   
  $(".small a").hover(
    function(){
      var imgname = $(this).attr('href'); 
      $(".large").fadeTo(
        "slow", 0, 
        function() {  
          $('.large').attr('src',imgname);  
        }
      ).fadeTo("slow", 1);  
    }
  );
});   
