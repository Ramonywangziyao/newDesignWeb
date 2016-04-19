(function(){
  $(document).on('ready', function() {
    $introTitle = $('.coverTitle');
    if(getCookie("username")=='')
    {
      setCookie();
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
        $introTitle.html("NOUS STUDIO");
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
    }
    else {
      $introTitle.hide();
      $('.cover').hide();
      $(".texture").hide();
      $('.welcome').hide();
      setTimeout(function(){
        $(".texture").fadeIn('slow');
      }, 500);
      setTimeout(function(){
        $('.menu').fadeIn('slow');
      }, 500);
      setTimeout(function(){
        $('.bottom').fadeIn('slow');
      }, 500);
      setTimeout(function(){
        $('.welcome').fadeIn('slow');
      }, 500);
    }
  });
  $( ".welcome" ).hover(function() {
    $(this).stop().animate({opacity:"0.5"});
    },function(){
    $(this).stop().animate({opacity:"0.3"});
  });
  $( ".trans2" ).hover(function() {
    $(this).stop().animate({opacity:"0"});
    },function(){
    $(this).stop().animate({opacity:"0.9"});
  });
  $( ".trans3" ).hover(function() {
    $(this).stop().animate({opacity:"0"});
    },function(){
    $(this).stop().animate({opacity:"0.9"});
  });
  $( ".trans4" ).hover(function() {
    $(this).stop().animate({opacity:"0"});
    },function(){
    $(this).stop().animate({opacity:"0.9"});
  });
  $( ".trans5" ).hover(function() {
    $(this).stop().animate({opacity:"0"});
    },function(){
    $(this).stop().animate({opacity:"0.9"});
  });
  $( ".texture" ).hover(function() {
    $(this).stop().animate({opacity:"0.5"});
    },function(){
    $(this).stop().animate({opacity:"0.3"});
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
  $heart = $('.welcome');
  $heartaudio = $heart.find('audio')[0];
  $heart.hover(function(){
  $heartaudio.play();
  }, function(){
  $heartaudio.stop();
  });
  function setCookie() {
    var date = new Date();
    date.setTime(date.getTime()+(600*1000));
    document.cookie = 'username=' + "user" + '; expires=' + date.toUTCString() + '; path=/';
  }
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
  }
})();
