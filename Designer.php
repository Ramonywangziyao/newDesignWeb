<?php
    session_start();
?>
<!DOCTYPE html>
<html>
<head>
  <link rel="icon" href="nd.ico"/>
  <link rel="shortcut icon" href="nd.ico"/>
  <link rel="stylesheet" type="text/css" href="css/mainStyle.css">
  <link rel="stylesheet" type="text/css" href="css/designer.css">
  <title>NOUS Studio</title>
</head>
<body class="general">
  <div class="texture" style="opacity:0.2">
  </div>
  <div class="designerSection">
    <div class="portfolio" id="one">
      <div class="introDesigner">
        <h2 class="designerName">Will Hooker</h2>
        <h3 class="designerPosition">职务：首席设计师</h3>
        <p class="designerIntro">Will Hooker 来自于美国。2005年毕业于美国帕森斯设计学院室内设计系。荣获过无数次世界大奖。</p>
      </div>
      <div class="photoDesigner">
        <img class="imageStyle" src="img/designers/1.jpg"/>
      </div>
    </div>
    <div class="portfolio"  id="two">
      <div class="introDesigner">
        <h2 class="designerName">李婉莹</h2>
        <h3 class="designerPosition">职务：高级设计师</h3>
        <p class="designerIntro">李婉莹 毕业于四川美院。荣获重庆多次设计大奖，并且其作品被录入重庆丽人设计杂志。</p>
      </div>
      <div class="photoDesigner">
        <img class="imageStyle" src="img/designers/2.jpg"/>
      </div>
    </div>
    <div class="portfolio"  id="three">
      <div class="introDesigner">
        <h2 class="designerName">李亮</h2>
        <h3 class="designerPosition">职务：高级设计师</h3>
        <p class="designerIntro">如果说，有一个人能够把设计玩转到极致，那么此人非李亮莫属。他，25岁就荣获了国际法拉希设计比赛头奖，为设计界最高荣誉。其作品比比喻为“幻觉”。具有后现代主义与极简主义的映射。</p>
      </div>
      <div class="photoDesigner">
        <img class="imageStyle" src="img/designers/3.jpg"/>
      </div>
    </div>
    <div class="portfolio" id="four">
      <div class="introDesigner">
        <h2 class="designerName">王丽洁</h2>
        <h3 class="designerPosition">职务：创始人 园艺设计师</h3>
        <p class="designerIntro">教育：01.2012 - 05.2015年在北卡罗来纳州立大学园艺景观设计建筑系获得本科学士学位，2014年获得可持续性花园建造设计证书
                              工作阅历：
                                2012-2014. 每年5-8月在重庆慧兴装饰有限公司间歇式实习
        </p>
      </div>
      <div class="photoDesigner">
        <img class="imageStyle" src="img/designers/4.jpg"/>
      </div>
    </div>
    <div class="portfolio" id="five">
      <div class="introDesigner">
        <h2 class="designerName">何悦</h2>
        <h3 class="designerPosition">职务：平面设计师</h3>
        <p class="designerIntro">教育：
          09.2006 - 06.2010年获得北京林业大学城市规划系本科学位
          08.2011 - 05.2013年北卡罗来纳州立大学景观建筑系硕士学位
          08.2014至今北卡罗来纳州立大学设计博士学位在读
          工作经验:
          11.2008 - 03.2009 北京新华夏建筑设计公司
          03.2010 - 12.2010 北京Turenscape
          01.2011 - 06.2011 北京Tsinghua城市规划设计装饰公司
          10.2013 - 04.2014 北卡罗来纳州立大学建筑学院
        </p>
      </div>
      <div class="photoDesigner">
        <img class="imageStyle" src="img/designers/5.jpg"/>
      </div>
    </div>
  </div>
  <div class="header">
    <div class="logo">
      <p class="icon">NOUS STUDIO</p>
    </div>
    <div class="menu">
      <a href="contact.php" style="margin-right:180px" class="title">联系我们</a>
      <a href="example.php" style="margin-right:30px" class="title">案例</a>
      <a href="Designer.php" style="margin-right:30px" class="title">设计师</a>
      <a href="introduction.php" style="margin-right:30px" class="title">介绍</a>
      <a href="index.php" style="margin-right:30px" class="title">首页</a>
    </div>
  </div>
  <div class="bottom" align="center">
    <a class="user_behave" id="login" style="margin-right:90px" href="login.php">登录</a>
    <a class="user_behave" id="register" style="margin-left:0px" href="http://www.baidu.com">注册</a>
    <p align="center" class="address">中国重庆市渝中区邹容路38号2-3-2 400010</p>
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="js/designer.js"></script>
  <?php include 'loginStatus.php';?>
</body>
</html>
