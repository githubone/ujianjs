$(document).ready(function() {
  ticker_height = $('#news_scroller').height();
  news_height=$('#news_scroller p').height();
  no_oflines = 0;
  rotate = true;

  $('#news_scroller').hover(
    function(){   
      rotate = false;
    }, 
    function(){
      rotate = true;
    }
  );

  scroll();
});

function scroll() {
  no_oflines += rotate ? -2 : 0;
  $('#news_scroller p').css( 'top', ''+no_oflines+"px" );
  if( no_oflines<-1*news_height ) no_oflines = ticker_height;
  setTimeout( scroll, 50 );
}
