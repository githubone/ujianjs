$(document).ready(function() {   
    $('#submit').click(function () {           
   var info = $("form").serialize();
$('#message').text('The format when input elements are serialized:  '+info);	
return false;	
});		
});