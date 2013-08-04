$(document).ready(function() {
  $('img').click(function(){
    $(this).animate({left:600, width:$(this).width()*2,height:$(this).height()*2},'slow');
  });
});
