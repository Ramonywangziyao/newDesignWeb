(function(){
  $(document).on('ready', function() {
    $('.map').hide();
    $('.menu').hide();
    setTimeout(function(){
      $('.map').fadeIn('slow');
    }, 500);
    setTimeout(function(){
      $('.menu').fadeIn('slow');
    }, 500);
  });
  $( ".map" ).hover(function() {
    $(this).stop().animate({opacity:"0.9"});
    },function(){
    $(this).stop().animate({opacity:"0.5"});
  });
  $( ".contactFrame" ).hover(function() {
    $(this).stop().animate({opacity:"0.9"});
    },function(){
    $(this).stop().animate({opacity:"0.5"});
  });
  $( ".texture" ).hover(function() {
    $(this).stop().animate({opacity:"0.5"});
    },function(){
    $(this).stop().animate({opacity:"0.3"});
  });
  $( ".title" ).hover(function() {
    $(this).stop().animate({opacity:"0.1"});
    },function(){
    $(this).stop().animate({opacity:"0.5"});
  });
  $( ".texture" ).hover(function() {
    $(this).stop().animate({opacity:"0.5"});
    },function(){
    $(this).stop().animate({opacity:"0.95"});
  });
})();
