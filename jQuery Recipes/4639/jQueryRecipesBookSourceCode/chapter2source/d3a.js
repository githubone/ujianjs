$(document).ready(function() {
  var members = [ "John", "Steve", "Ben",  "Damon","Ian" ]; 
  $('p.allmem').html(members.join("<br />"));
  members = $.grep(members, function(v) { return v.match(/^[A-D]/)});
  $('p.selected').html(members.join("<br />"));
});