(function(){
  $(document).on('ready', function() {
    $eone = $('#e1');
    $etwo = $('#e2');
    $ethree = $('#e3');
    $efour = $('#e4');
    $efive = $('#e5');
    $ione = $('#i1');
    $itwo = $('#i2');
    $ithree = $('#i3');
    $ifour = $('#i4');
    $ifive = $('#i5');
    $('.menu').hide();
    $eone.hide();
    $etwo.hide();
    $ethree.hide();
    $efour.hide();
    $efive.hide();
    $ione.hide();
    $itwo.hide();
    $ithree.hide();
    $ifour.hide();
    $ifive.hide();
    setTimeout(function(){
      $('.menu').fadeIn('slow');
    }, 500);
    $('.exampleTitle').hide();
    setTimeout(function(){
       $('.exampleTitle').fadeIn('slow');
    }, 300);
    setTimeout(function(){
      $eone.fadeIn('slow');
    }, 500);
    setTimeout(function(){
      $etwo.fadeIn('slow');
    }, 700);
    setTimeout(function(){
      $ethree.fadeIn('slow');
    }, 900);
    setTimeout(function(){
      $efour.fadeIn('slow');
    }, 1100);
    setTimeout(function(){
      $efive.fadeIn('slow');
    }, 1300);
    setTimeout(function(){
      $ione.fadeIn('slow');
    }, 500);
    setTimeout(function(){
      $itwo.fadeIn('slow');
    }, 700);
    setTimeout(function(){
      $ithree.fadeIn('slow');
    }, 900);
    setTimeout(function(){
      $ifour.fadeIn('slow');
    }, 1100);
    setTimeout(function(){
      $ifive.fadeIn('slow');
    }, 1300);
  });

  function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    document.documentElement.scrollLeft -= (delta*60);
    document.body.scrollLeft -= (delta*60);
    e.preventDefault();
    }
    if (window.addEventListener) {
    window.addEventListener("mousewheel", scrollHorizontally, false);
    window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
    window.attachEvent("onmousewheel", scrollHorizontally);
  }
  $( ".exampleInstance" ).mouseover(function() {
  $(this).fadeTo( "fast" , 1, function() {
    // Animation complete.
  });
  if($(this).attr('id')=='e1')
  {
    $('#i1').fadeTo( "fast" , 0, function() {
      // Animation complete.
    });
  }
  if($(this).attr('id')=='e2')
  {
    $('#i2').fadeTo( "fast" , 0, function() {
      // Animation complete.
    });
  }
  if($(this).attr('id')=='e3')
  {
    $('#i3').fadeTo( "fast" , 0, function() {
      // Animation complete.
    });
  }
  if($(this).attr('id')=='e4')
  {
    $('#i4').fadeTo( "fast" , 0, function() {
      // Animation complete.
    });
  }
  if($(this).attr('id')=='e5')
  {
    $('#i5').fadeTo( "fast" , 0, function() {
      // Animation complete.
    });
  }
  });
  $( ".exampleInstance" ).mouseout(function() {
  $(this).fadeTo( "fast" , 0.65, function() {
    // Animation complete.
  });
  if($(this).attr('id')=='e1')
  {
    $('#i1').fadeTo( "fast" , 1, function() {
      // Animation complete.
    });
  }
  if($(this).attr('id')=='e2')
  {
    $('#i2').fadeTo( "fast" , 1, function() {
      // Animation complete.
    });
  }
  if($(this).attr('id')=='e3')
  {
    $('#i3').fadeTo( "fast" , 1, function() {
      // Animation complete.
    });
  }
  if($(this).attr('id')=='e4')
  {
    $('#i4').fadeTo( "fast" , 1, function() {
      // Animation complete.
    });
  }
  if($(this).attr('id')=='e5')
  {
    $('#i5').fadeTo( "fast" , 1, function() {
      // Animation complete.
    });
  }
  });
  $( ".texture" ).mouseover(function() {
  $( ".texture" ).fadeTo( "slow" , 0.5, function() {
    // Animation complete.
  });
  });
  $( ".texture" ).mouseout(function() {
  $( ".texture" ).fadeTo( "fast" , 0.1, function() {
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
