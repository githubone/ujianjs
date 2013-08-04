$(document).ready(function() {
  $('.buttons').hover(
    function(){
      $(this).addClass('hover');
    }, 
    function(){
      $(this).removeClass('hover');
    }
  );

  $('#boldbutton').bind('click', function(){
    $('#info').removeClass('italicmatter');
    $('#info').addClass('boldmatter');
  });

  $('#italicbutton').bind('click', function(){
    $('#info').removeClass('boldmatter');
    $('#info').addClass('italicmatter');
  });
});
