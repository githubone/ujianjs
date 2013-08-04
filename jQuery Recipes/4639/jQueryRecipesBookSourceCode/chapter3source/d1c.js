$(document).ready(function() {
  $('.buttons').click(function(event){
    var $target=$(event.target);
    if($target.is('.bold')){
      alert('You have clicked the Bold button');
    }
    if($target.is('.italic')){
      alert('You have clicked the Italic button');
    }
  });
});