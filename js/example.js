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
  $('.bottom').fadeTo( "fast" , 1, function() {
    // Animation complete.
  });
  if($(this).attr('id')=='e1')
  {
    $('#i1').fadeTo( "fast" , 0, function() {
      // Animation complete.
    });
    $('.detailTitle').html("重庆市鲁能巴蜀中学大礼堂");
    $('.detailContent').html("重庆鲁能巴蜀中学由重庆鲁能开发（集团）有限公司和重庆巴蜀中学联合创办的一所股份制民营全日制完全中学。[1]  学校占地163亩，建筑面积141926平方米，总投资（不含地价）2.4亿元。于2007年9月开学。现有100余个教学班，600多名教职工。学校按照《鲁能巴蜀中学章程》运行，建立了董事会领导下的校领导班子，实现了自主运行。鲁能巴蜀中学与重庆巴蜀中学一脉相承，坚持与重庆巴蜀中学同步管理。");
    $('.exampleDetail').fadeTo( "fast" , 1, function() {
      // Animation complete.
    });
  }
  if($(this).attr('id')=='e2')
  {
    $('#i2').fadeTo( "fast" , 0, function() {
      // Animation complete.
    });
    $('.detailTitle').html("重庆大学");
    $('.detailContent').html("重庆大学（Chongqing University），简称重大（CQU），坐落于中央直辖市重庆，是中共中央直管、教育部直属的副部级全国重点大学，国家“211工程”、“985工程”首批重点建设的高校，也是“2011计划”、“111计划”、“卓越工程师教育培养计划”、“卓越法律人才教育培养计划”、“重庆市大学联盟”、“国家建设高水平大学公派研究生项目”的主要成员。是国家31所副部级中管高校之一，教育部批准建研究生院的56所高校之一，研究生自主划线的34所名牌大学之一，由教育部和重庆市共建，享有 “嘉陵与长江相汇而生重庆，人文与科学相济而衍重大”的美誉。");
    $('.exampleDetail').fadeTo( "fast" , 1, function() {
      // Animation complete.
    });
  }
  if($(this).attr('id')=='e3')
  {
    $('#i3').fadeTo( "fast" , 0, function() {
      // Animation complete.
    });
    $('.detailTitle').html("棕榈泉羽毛球场");
    $('.detailContent').html("重庆棕榈泉国际花园位于重庆市北部新区金开大道88号，占地约1200亩，其中纯水面面积约160亩的湖泊，地形由四周呈缓坡状层层跌落湖边，湖光掠影，形成天造地设的自然大园林。项目总建筑面积逾100万平方米，240余亩棕榈泉生态公园、近10000平方米的棕榈泉国际俱乐部、15000余平方米的棕榈泉湖滨商业和南加州风情商业街、4000多平方米体育会馆构成了国际标准居住配套。A区占地约140亩，396户欧式建筑，以多层、小高层和联排别墅为主，依山而建。2004年开盘销售获得成功，首开重庆高档精装成品房先河。");
    $('.exampleDetail').fadeTo( "fast" , 1, function() {
      // Animation complete.
    });
  }
  if($(this).attr('id')=='e4')
  {
    $('#i4').fadeTo( "fast" , 0, function() {
      // Animation complete.
    });
    $('.detailTitle').html("重庆巴蜀中学黄花园");
    $('.detailContent').html("重庆市巴蜀中学校（Chongqing Bashu Secondary School）坐落在黄花园立交畔，是重庆市重点中学、全国德育先进学校、全国艺术教育先进学校、全国奥林匹克教育示范学校、教育部信息化试点学校、全国少年儿童科学体验活动优秀示范学校。");
    $('.exampleDetail').fadeTo( "fast" , 1, function() {
      // Animation complete.
    });
  }
  if($(this).attr('id')=='e5')
  {
    $('#i5').fadeTo( "fast" , 0, function() {
      // Animation complete.
    });
    $('.detailTitle').html("重庆洪崖洞风景区");
    $('.detailContent').html("洪崖洞拥有2300多年的历史。“洪崖洞民俗风貌区”项目是2005年重庆市政府“八大民心工程”之一，总面积4.6万平方米，是“重庆市重点景观工程”和“AAA级重点旅游项目工程”。该景区以拥城市旅游景观、商务休闲景观和城市人文景观于一体而闻名，并以最具巴渝传统建筑特色的“吊脚楼”风貌为主体，依山就势，沿崖而建，让解放碑直达江滨，是游吊脚群楼、观洪崖滴翠、逛山城老街、赏巴渝文化、看两江汇流、品天下美食的好去处，也是解放碑的会客厅。");
    $('.exampleDetail').fadeTo( "fast" , 1, function() {
      // Animation complete.
    });
  }
  });
  $( ".exampleInstance" ).mouseout(function() {
  $(this).fadeTo( "fast" , 0.65, function() {
    // Animation complete.
  });
  $('.bottom').fadeTo( "fast" , 0.95, function() {
    // Animation complete.
  });
  if($(this).attr('id')=='e1')
  {
    $('#i1').fadeTo( "fast" , 1, function() {
      // Animation complete.
    });
    $('.exampleDetail').fadeTo( "fast" , 0, function() {
      // Animation complete.
    });
  }
  if($(this).attr('id')=='e2')
  {
    $('#i2').fadeTo( "fast" , 1, function() {
      // Animation complete.
    });
    $('.exampleDetail').fadeTo( "fast" , 0, function() {
      // Animation complete.
    });
  }
  if($(this).attr('id')=='e3')
  {
    $('#i3').fadeTo( "fast" , 1, function() {
      // Animation complete.
    });
    $('.exampleDetail').fadeTo( "fast" , 0, function() {
      // Animation complete.
    });
  }
  if($(this).attr('id')=='e4')
  {
    $('#i4').fadeTo( "fast" , 1, function() {
      // Animation complete.
    });
    $('.exampleDetail').fadeTo( "fast" , 0, function() {
      // Animation complete.
    });
  }
  if($(this).attr('id')=='e5')
  {
    $('#i5').fadeTo( "fast" , 1, function() {
      // Animation complete.
    });
    $('.exampleDetail').fadeTo( "fast" , 0, function() {
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
