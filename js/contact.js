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
  $( ".map" ).mouseover(function() {
  $( ".map" ).fadeTo( "slow" , 0.9, function() {
    // Animation complete.
  });
  });
  $( ".map" ).mouseout(function() {
  $( ".map" ).fadeTo( "fast" , 0.5, function() {
    // Animation complete.
  });
  });
  $( ".contactFrame" ).mouseover(function() {
  $( ".contactFrame" ).fadeTo( "slow" , 0.9, function() {
    // Animation complete.
  });
  });
  $( ".contactFrame" ).mouseout(function() {
  $( ".contactFrame" ).fadeTo( "fast" , 0.5, function() {
    // Animation complete.
  });
  });
  $( ".texture" ).mouseover(function() {
  $( ".texture" ).fadeTo( "slow" , 0.5, function() {
    // Animation complete.
  });
  });
  $( ".texture" ).mouseout(function() {
  $( ".texture" ).fadeTo( "fast" , 0.3, function() {
    // Animation complete.
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
    // Animation complete.
  });
  });
  $( ".bottom" ).mouseout(function() {
  $(this).fadeTo( "slow" , 0.95, function() {
    // Animation complete.
  });
  });
})();
