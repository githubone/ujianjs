$(document).ready(function() {   
  $('#submit').click(function () {           
    var name = $('.uname').val();
    var data = 'uname=' + name;   
    $.ajax({
      type:"GET",
      url:"welcom.php",    
      data: data,        
      success: function (html) {                 
        $('#message').html(html);
      }  
    });   
    return false;   
  });
});