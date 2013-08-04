$(document).ready(function() {   
$('.error').hide();
 $('#myForm').ajaxForm(function() { 
                alert("Thank you for your comment!"); 
            }); 
});