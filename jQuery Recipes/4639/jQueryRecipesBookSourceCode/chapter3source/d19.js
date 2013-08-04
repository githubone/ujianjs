$(document).ready(function() {
  $('p#message1').css({'border': '2px solid', 'text-align': 'center','font-weight':'bold'}).hide();
  $('p#message2').css({'backgroundColor': '#f00','color':'#fff','text-align': 'center',
'font-weight':'bold'}).click(
    function(){
      $(this).slideUp('slow');
      $('p#message1').slideDown('slow');
    }
  );
});