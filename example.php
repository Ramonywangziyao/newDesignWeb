<?php
    session_start();
?>
<!DOCTYPE html>
<html>
<head>
  <link rel="icon" href="nd.ico"/>
  <link rel="shortcut icon" href="nd.ico"/>
  <link rel="stylesheet" type="text/css" href="css/mainStyle.css">
  <link rel="stylesheet" type="text/css" href="css/example.css">
  <title>NOUS Studio</title>
</head>
<body class="general">
  <div class="texture">
  </div>
  <div class="example" id="eg">
    <h1 class="exampleTitle">作品集</h1>
    <div class="exampleInstance" id="e1">
      <img class="exampleStyle" src="img/examples/1.jpg"/>
    </div>
    <div class="exampleInstance" id="e2">
      <img class="exampleStyle" src="img/examples/2.jpg"/>
    </div>
    <div class="exampleInstance" id="e3">
      <img class="exampleStyle" src="img/examples/3.jpg"/>
    </div>
    <div class="exampleInstance" id="e4">
      <img class="exampleStyle" src="img/examples/4.jpg"/>
    </div>
    <div class="exampleInstance" id="e5">
      <img class="exampleStyle" src="img/examples/5.jpg"/>
    </div>
    <div class="exampleIntro">
      <div class="exampleIntroInstance" id="i1">
        <p>重庆市鲁能巴蜀中学大礼堂<br/>
          Chongqing Luneng Bashu middle school</p>
      </div>
      <div class="exampleIntroInstance" id="i2">
        <p>重庆大学<br/>
          Chongqing University</p>
      </div>
      <div class="exampleIntroInstance" id="i3">
        <p>棕榈泉室内羽毛球馆<br/>
          Chongqing Palm Beach badminton gym</p>
      </div>
      <div class="exampleIntroInstance" id="i4">
        <p>重庆市巴蜀中学黄花园校区<br/>
          Chongqing Bashu middle school</p>
      </div>
      <div class="exampleIntroInstance" id="i5">
        <p>重庆市洪崖洞风景区<br/>
          Chongqing Hongyadong</p>
      </div>
    </div>
    <div class='right'>
    </div>
    <div class='left'>
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
  <div class="exampleDetail">
    <h1 class="detailTitle">aa</h1>
    <p class="detailContent">asdasdsa</p>
  </div>
  <div class="bottom" align="center">
    <a class="user_behave" id="login" style="margin-right:90px" href="login.php">登录</a>
    <a class="user_behave" id="register" style="margin-left:0px" href="http://www.baidu.com">注册</a>
    <p align="center" class="address">中国重庆市渝中区邹容路38号2-3-2 400010</p>
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script type='text/javascript' src='/js/jquery.mousewheel.min.js'></script>
  <script src="js/example.js"></script>
  <?php include 'loginStatus.php';?>
</body>
</html>
