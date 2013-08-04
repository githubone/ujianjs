$(document).ready(function() {   
$('.error').hide();
$('#submit').click(function () {           
var em = $('.emailadd').val();		
var data='emailadd='+em;
$.ajax({
type:"POST",
url:"validatemail.php", 
data:data,             
success:function(html) {
$('.error').show();		
$('.error').text(html);				
}
});		
return false;	
});
});