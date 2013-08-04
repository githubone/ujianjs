$(document).ready(function() {
  ticker_height = $('#news_scroller').height();
  news_height=$('#news_scroller p').height();
  no_oflines = 0;
  scroll();
});

function scroll() {
  no_oflines -= 2;
  $('#news_scroller p').css( 'top', ''+no_oflines+"px" );
  if( no_oflines<-1*news_height ) no_oflines = ticker_height;
  setTimeout( scroll, 50 );
}
