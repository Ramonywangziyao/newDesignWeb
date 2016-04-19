(function(){
  $( ".texture" ).hover(function() {
    $(this).stop().animate({opacity:"0.5"});
    },function(){
    $(this).stop().animate({opacity:"0.1"});
  });
  $( ".title" ).hover(function() {
    $(this).stop().animate({opacity:"1"});
    },function(){
    $(this).stop().animate({opacity:"0.5"});
  });
  $( ".bottom" ).hover(function() {
    $(this).stop().animate({opacity:"0.5"});
    },function(){
    $(this).stop().animate({opacity:"0.95"});
  });
  $( ".login" ).hover(function() {
    $(this).stop().animate({opacity:"1"});
    },function(){
    $(this).stop().animate({opacity:"0.4"});
  });
})();
