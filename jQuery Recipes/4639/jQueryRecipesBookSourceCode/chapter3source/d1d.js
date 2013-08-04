$(document).ready(function() {
  $('.buttons').dblclick(function(){
    alert('You have double clicked the ' +$(this).text()+' button');
  });
});