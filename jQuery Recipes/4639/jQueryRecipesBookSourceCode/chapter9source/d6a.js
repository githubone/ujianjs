$(document).ready(function() {   
alert("Offset top: " +$('.pic').offset().top+", Offset left : " +$('.pic').offset().left+", Position top: "+$('.pic').position().top+", Position left: "+$('.pic').position().left);
$('.pic').scrollTop(50);
$('.pic').scrollLeft(50);
});