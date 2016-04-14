(function(){
  $(document).on('ready', function() {
    $introTitle = $('.coverTitle');
    $introTitle.hide();
    $('.menu').hide();
    $('.bottom').hide();
    setTimeout(function(){
      $introTitle.fadeIn('slow');
    }, 1000);
    setTimeout(function(){
      $introTitle.fadeOut('slow');
    }, 3000);
    setTimeout(function(){
    $introTitle.hide();
    $introTitle.html("欢迎来到");
    }, 3500);
    setTimeout(function(){
      $introTitle.fadeIn('slow');
    }, 4500);
    setTimeout(function(){
      $introTitle.fadeOut('slow');
    }, 6500);
    setTimeout(function(){
    $introTitle.hide();
    $introTitle.html("NEW DESIGN STUDIO");
    }, 7000);
    setTimeout(function(){
      $introTitle.fadeIn('slow');
    }, 7500);
    setTimeout(function(){
      $introTitle.fadeOut('slow');
    }, 9500);
    setTimeout(function(){
      $('.cover').fadeOut('slow');
    }, 11000);
    $(".texture").hide();
    setTimeout(function(){
      $(".texture").fadeIn('slow');
    }, 11000);
    setTimeout(function(){
      $('.menu').fadeIn('slow');
    }, 11500);
    setTimeout(function(){
      $('.bottom').fadeIn('slow');
    }, 11500);
  });
  $( ".welcome" ).mouseover(function() {
  $( ".welcome" ).fadeTo( "slow" , 0.7, function() {
  });
  });
  $( ".welcome" ).mouseout(function() {
  $( ".welcome" ).fadeTo( "slow" , 0.5, function() {
  });
  });
  $( ".trans2" ).mouseover(function() {
  $(this).fadeTo( "slow" , 0, function() {
  });
  });
  $( ".trans2" ).mouseout(function() {
  $(this).fadeTo( "slow" , 0.9, function() {
  });
  });
  $( ".trans3" ).mouseover(function() {
  $(this).fadeTo( "slow" , 0, function() {
  });
  });
  $( ".trans3" ).mouseout(function() {
  $(this).fadeTo( "slow" , 0.9, function() {
  });
  });
  $( ".trans4" ).mouseover(function() {
  $(this).fadeTo( "slow" , 0, function() {
  });
  });
  $( ".trans4" ).mouseout(function() {
  $(this).fadeTo( "slow" , 0.9, function() {
  });
  });
  $( ".trans5" ).mouseover(function() {
  $(this).fadeTo( "slow" , 0, function() {
  });
  });
  $( ".trans5" ).mouseout(function() {
  $(this).fadeTo( "slow" , 0.9, function() {
  });
  });
  $( ".texture" ).mouseover(function() {
  $( ".texture" ).fadeTo( "slow" , 0.7, function() {
  });
  });
  $( ".texture" ).mouseout(function() {
  $( ".texture" ).fadeTo( "fast" , 0.3, function() {
  });
  });
  $( ".title" ).mouseover(function() {
  $(this).fadeTo( "slow" , 1, function() {
  });
  });
  $( ".title" ).mouseout(function() {
  $(this).fadeTo( "slow" , 0.5, function() {
  });
  });
  $( ".bottom" ).mouseover(function() {
  $(this).fadeTo( "slow" , 0.5, function() {
  });
  });
  $( ".bottom" ).mouseout(function() {
  $(this).fadeTo( "slow" , 0.95, function() {
  });
  });
  $heart = $('.welcome');
  $heartaudio = $heart.find('audio')[0];
  $heart.hover(function(){
  $heartaudio.play();
  }, function(){
  $heartaudio.stop();
  });
})();
