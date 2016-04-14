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
  $( ".portfolio" ).mouseover(function() {
  $(this).fadeTo( "fast" , 1, function() {
  });
  });
  $( ".portfolio" ).mouseout(function() {
  $(this).fadeTo( "fast" , 0.7, function() {
  });
  });
  $( ".texture" ).mouseover(function() {
  $( ".texture" ).fadeTo( "slow" , 0.5, function() {
  });
  });
  $( ".texture" ).mouseout(function() {
  $( ".texture" ).fadeTo( "fast" , 0.1, function() {
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
})();
