$(document).ready(function() {   
$('.usrerror').hide();
$('.emerror').hide();
$('#submit').click(function () {           
var uid = $('.userid').val();	
var em = $('.emailadd').val();		
var data='userid='+uid+'&emailadd='+em;
$.ajax({
type:"POST",
url:"validatedata.php", 
data:data,             
success:function(html) {
var twomsgs = html.split("\n");
for ( var i in twomsgs )
{
var errmsg = twomsgs[i].split("|");
if(errmsg[0]=='user')
{
$('.usrerror').show();		
$('.usrerror').text(errmsg[1]);				
}
if(errmsg[0]=='email')
{
$('.emerror').show();		
$('.emerror').text(errmsg[1]);				
}
}
}
});		
return false;	
});
});