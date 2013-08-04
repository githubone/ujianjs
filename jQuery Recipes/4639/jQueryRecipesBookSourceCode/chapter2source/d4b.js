$(document).ready(function() {
  var members = [45, 10,3,22,7 ]; 
  $('p.allmem').html(members.join("<br>"));
  members = members.sort(function(a,b){
    return a-b;
  });
  $('p.sorted').html(members.join("<br>"));
});
