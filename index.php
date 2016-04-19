<?php
    session_start();
    $_SESSION["logedin"];
    $_SESSION["username"];
?>
<!DOCTYPE html>
<html>
<head>
  <link rel="icon" href="nd.ico"/>
  <link rel="shortcut icon" href="nd.ico"/>
  <link rel="stylesheet" type="text/css" href="css/mainStyle.css">
  <title>NOUS Studio</title>
</head>
<body class="general">
  <div class="texture">
  </div>
  <div class="welcome" align="center">
    <audio src="sound/1.wav" preload="auto"></audio>
  </div>
  <div class = 'square'>
    <div class="trans2">
    </div>
    <div class="trans3">
    </div>
    <div class="trans4">
    </div>
    <div class="trans5">
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
  <script src="js/mainScript.js"></script>
  <div class="cover">
  </div>
  <h1 class="coverTitle">回归设计的本源</h1>
  <?php include 'loginStatus.php';?>
</body>
</html>
