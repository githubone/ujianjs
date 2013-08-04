$(document).ready(function() {
  $('.books').hide();
  $('.movies').hide();
  $('.music').hide();

  $('#booksbutton').click(function(){
    $('.books').show('slow');
    $('.movies').hide();
    $('.music').hide();
  });

  $('#moviesbutton').click(function(){
    $('.movies').show('slow');
    $('.books').hide();
    $('.music').hide();
  });

  $('#musicbutton').click(function(){
    $('.music').show('slow');
    $('.books').hide();
    $('.movies').hide();
  });
});
