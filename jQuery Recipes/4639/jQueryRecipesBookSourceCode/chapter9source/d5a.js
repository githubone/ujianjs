$(document).ready(function() {   
$('.usrerror').hide();
$('.emailerror').hide();

function validate_data()
{
var data=$('.usrinfo').val();
var len=data.length;
var pattern= new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
var flag=true;
if(len<1)
{
$('.usrerror').show();
flag=false;
}
else
{
$('.usrerror').hide();
}
var email=$('.emailinfo').val();
if(pattern.test(email))
{
$('.emailerror').hide();
}
else
{
$('.emailerror').show();
flag=false;
}
if(flag==false)
{
return false;
}
else
{
$('.usrinfo').val("");
$('.emailinfo').val("");
}
};


$('#myForm').ajaxForm({ 
beforeSubmit: validate_data,
success: function(){
alert("Thank you for your comment!"); 
}
}); 
});

