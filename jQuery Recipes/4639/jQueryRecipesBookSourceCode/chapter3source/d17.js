$(document).ready(function() {
  $('.message').hide();
  $('span.readmore').click(function(){
    $('.message').show('slow');
    $(this).hide();
  });
});