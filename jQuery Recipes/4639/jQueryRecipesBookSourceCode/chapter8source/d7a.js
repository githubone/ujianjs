$(document).ready(function() {   
    $('#submit').click(function () {      
$.getJSON('drinkinfo.json', function (data){
var drinks="<ul>";
$.each(data, function(i,n){
drinks+="<li>"+n["optiontext"]+"</li>";
});
drinks+="</ul>";              
$('#message').append(drinks);	
        });   
return false;	
});		
});
