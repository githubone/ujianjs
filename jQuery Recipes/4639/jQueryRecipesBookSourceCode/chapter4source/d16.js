$(document).ready(function() {   
$('.usrerror').hide();
$('.emerror').hide();
    $('#submit').click(function () {           
   var info = $("form").serialize();
$('#message').text('The format when input elements are serialized:  '+info);	
return false;	
});		
});