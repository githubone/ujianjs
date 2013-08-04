$(document).ready(function() {
  var $pic = $('#images a');   
  $pic.hide();
  var imgs = $pic.length;   
  var next;
  for (i=0;i<imgs;i++){
    next=$pic.eq(i);
    next.css({'position': 'absolute','left':160*i});
    next.show();
  }   
});