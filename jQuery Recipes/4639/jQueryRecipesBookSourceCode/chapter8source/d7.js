$(document).ready(function() {   
$('#submit').click(function () {      
$.ajax({
type:"GET",
url:"drinkinfo.json",    
dataType:"json",
success: function (data) {   
var drinks="<ul>";
$.each(data, function(i,n){
drinks+="<li>"+n["optiontext"]+"</li>";
});
drinks+="</ul>";              
$('#message').append(drinks);	
}
});   
return false;	
});		
});
