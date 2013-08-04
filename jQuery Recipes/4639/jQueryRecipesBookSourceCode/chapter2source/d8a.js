$(document).ready(function() {
  var students=[
  {
  "roll": 101,
  "name": "Ben",
  "emailId":"ben@gmail.com"
  },
  {
  "roll": 102,
  "name": "Ian",
  "emailId":"ian@gmail.com"
  },
  {
  "roll": 103,
  "name": "Caroline",
  "emailId":"carol@gmail.com"
  }
  ];

  $.each(students,function( index, value ){ 
    $('table.listofstud').append("<tr><td>"+value.roll+"</td><td>"+value.name+
        "</td><td>"+value.emailId+"</td></tr>");
  }); 
});