$(document).ready(function() {   
  $('#submit').click(function () {           
    var name = $('.uname').val();
    var data = 'uname=' + name;   
    $.ajax({
      type:"POST",
      url:"welcome.php",    
      data: data,        
      success: function (html) {                 
        $('#message').html(html);
      }  
    });   
    return false;   
  });
});
