$(document).ready(function() {   
$('.error').hide();
$('.submit').click(function(event){
alert( $('#myForm *').fieldValue()); 
alert( $('#myForm *').fieldSerialize()); 
event.preventDefault();
}); 
$('.clear').click(function(event){
$('#myForm').clearForm();
event.preventDefault();
});
});