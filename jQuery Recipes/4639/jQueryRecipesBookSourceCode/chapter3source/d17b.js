$(document).ready(function() {
  $('.message').hide();
  $('span.readmore').click(function(){
    $('.message').fadeIn('slow');
    $(this).hide();
  });
});