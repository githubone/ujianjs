$(document).ready(function() {
  var mem1 = [45, 10, 3]; 
  var mem2 = [22, 7]; 
  $('p.firstarr').html(mem1.join("<br />"));
  $('p.secondarr').html(mem2.join("<br />"));
  members = mem1.concat(mem2);
  $('p.combinedarr').html(members.join("<br />"));
});