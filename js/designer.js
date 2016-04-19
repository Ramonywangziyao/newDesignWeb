(function(){
  $(document).on('ready', function() {
    $done = $('#one');
    $dtwo = $('#two');
    $dthree = $('#three');
    $dfour = $('#four');
    $dfive = $('#five');
    $done.hide();
    $dtwo.hide();
    $dthree.hide();
    $dfour.hide();
    $dfive.hide();
    $('.menu').hide();
    setTimeout(function(){
      $('.menu').fadeIn('slow');
    }, 500);
    setTimeout(function(){
      $done.fadeIn('slow');
    }, 500);
    setTimeout(function(){
      $dtwo.fadeIn('slow');
    }, 700);
    setTimeout(function(){
      $dthree.fadeIn('slow');
    }, 900);
    setTimeout(function(){
      $dfour.fadeIn('slow');
    }, 1100);
    setTimeout(function(){
      $dfive.fadeIn('slow');
    }, 1300);
  });
  $( ".portfolio" ).hover(function() {
    $(this).stop().animate({opacity:"1"});
    },function(){
    $(this).stop().animate({opacity:"0.7"});
  });
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

})();
