$(document).ready(function() {   
$('#submit').click(function () {      
var selectedopts="";     
var info = $("form").serializeArray();

$.each(info, function(i, d){
selectedopts+=d.value+" ";
});

$('#message').text('The options chosen are:  '+selectedopts);	
return false;	
});		
});