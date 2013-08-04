$(document).ready(function() {
  var members = [45, 10, 3, 22, 7]; 
  $('p.allnum').html(members.join("<br>"));
  memsecond = members.splice(0,3);
  $('p.firstp').html(memsecond.join("<br />"));
  $('p.secondp').html(members.join("<br />"));
});