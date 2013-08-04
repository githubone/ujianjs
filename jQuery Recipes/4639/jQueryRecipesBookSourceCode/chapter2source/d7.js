$(document).ready(function() {
  var members = [45, 10, 3, 22, 7]; 
  $('p.origarr').html(members.join("<br />"));
  var str = members.join("");
  $('p.arrstring').text(str);
  var substr = str.substr(0,3);
  $('p.partstring').text(substr);
});