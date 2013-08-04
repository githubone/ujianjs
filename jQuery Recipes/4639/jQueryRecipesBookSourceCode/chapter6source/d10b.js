$(document).ready(function() {   
  $('td').find('p').css({'font-size':12, 'font-weight':'bold'});
  $(".small").hover(
    function(){
      $(this).parent().addClass('hover');
      var imgname = $(this).attr('href'); 
      $(".large").fadeTo(
        "slow", 0, 
        function() {  
          $('.large').attr('src',imgname);  
        }
      ).fadeTo("slow", 1);  
    },
    function(){   
      $(this).parent().removeClass('hover');
    }
  );
});   