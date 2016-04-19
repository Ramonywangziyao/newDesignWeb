(function(){
  $( ".title" ).hover(function() {
    $(this).stop().animate({opacity:"1"});
    },function(){
    $(this).stop().animate({opacity:"0.5"});
  });
  $( ".texture" ).hover(function() {
    $(this).stop().animate({opacity:"0.5"});
    },function(){
    $(this).stop().animate({opacity:"0.1"});
  });
  $( ".bottom" ).hover(function() {
    $(this).stop().animate({opacity:"0.5"});
    },function(){
    $(this).stop().animate({opacity:"0.95"});
  });
})();
