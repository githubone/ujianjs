$(document).ready(function() {   
  $('#submit').click(function () {           
    var name = $('.uname').val();
    var data = 'uname=' + name;   
    $.post(
      "welcome.php",    
      data,        
      function (html) {                 
        $('#message').html(html);
      }  
    );   
    return false;   
  });
});
