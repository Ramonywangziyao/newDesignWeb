<?php

    $_SESSION["menu"] = array("联系我们", "案例","设计师","介绍","首页");
    $_SESSION["logedin"] = "no";
    ?>
<!DOCTYPE html>
<html>
<head>
<link rel="icon" href="nd.ico"/>
<link rel="shortcut icon" href="nd.ico"/>
<link rel="stylesheet" type="text/css" href="css/mainStyle.css">
<title>Lijie Wang's Company</title>
</head>
<body class="general">

<!-- header  -->

<div class="header">
  <div class="logo">
    <p class="icon">NEW DESIGN</p>
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
  <a class="user_behave" style="margin-right:90px" href="login.php">登录</a>
  <a class="user_behave" style="margin-left:0px" href="http://www.baidu.com">注册</a>
  <p align="center" class="address">中国重庆市渝中区邹容路38号2-3-2 400010</p>
</div>

</body>
</html>
