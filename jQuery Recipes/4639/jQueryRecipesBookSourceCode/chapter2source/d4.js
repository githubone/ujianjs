$(document).ready(function() {
  var members = [ "John", "Steve", "Ben",  "Damon","Ian" ]; 
  $('p.allmem').html(members.join("<br />"));
  members = members.sort();
  $('p.sorted').html(members.join("<br />"));
});