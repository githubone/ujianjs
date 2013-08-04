$(document).ready(function() {
  $('.message').hide();
  $('span.readmore').toggle(function(){
    $('.message').show('slow');
    $(this).text("Read Less…");
  },
function(){
    $('.message').hide('slow');
    $(this).text("Read More…");
  });
});