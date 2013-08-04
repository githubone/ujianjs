$(document).ready(function() {
  $('div').click(function(event){
    var $target=$(event.target);
    if($target.is('div')){
      alert('You have clicked the div element');
    }
    if($target.is('p')){
      alert('You have clicked the paragraph element');
    }
    if($target.is('span')){
      alert('You have clicked the span element');
    }
  });
});