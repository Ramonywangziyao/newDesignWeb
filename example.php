<?php

    $_SESSION["menu"] = array("联系我们", "案例","设计师","介绍","首页");
    $_SESSION["logedin"] = "no";
    ?>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="css/mainStyle.css">
<title>Lijie Wang's Company</title>
</head>
<body class="general">

<!-- header  -->
<h1 class="exampleTitle">作品集</h1>
<div class="example">
  <div class="exampleInstance">
    <img class="exampleStyle" src="img/examples/1.jpg"/>
  </div>
  <div class="exampleInstance">
    <img class="exampleStyle" src="img/examples/2.jpg"/>
  </div>
  <div class="exampleInstance">
    <img class="exampleStyle" src="img/examples/3.jpg"/>
  </div>
  <div class="exampleInstance">
    <img class="exampleStyle" src="img/examples/4.jpg"/>
  </div>
  <div class="exampleInstance">
    <img class="exampleStyle" src="img/examples/5.jpg"/>
  </div>

</div>
<div class="exampleIntro">
  <div class="exampleIntroInstance">
    <p>重庆市鲁能巴蜀中学大礼堂<br/>
    Chongqing Luneng Bashu middle school</p>
  </div>
  <div class="exampleIntroInstance">
    <p>重庆大学<br/>
    Chongqing University</p>
  </div>
  <div class="exampleIntroInstance">
    <p>棕榈泉室内羽毛球馆<br/>
    Chongqing Palm Beach badminton gym</p>
  </div>
  <div class="exampleIntroInstance">
    <p>重庆市巴蜀中学黄花园校区<br/>
    Chongqing Bashu middle school</p>
  </div>
  <div class="exampleIntroInstance">
    <p>重庆市洪崖洞风景区<br/>
    Chongqing Hongyadong</p>
  </div>
</div>

<div class="header">
  <div class="logo">
    <p class="icon">NEW DESIGN</p>
  </div>
  <div class="menu">
    <a href="http://www.baidu.com" style="margin-right:180px" class="title"><?php echo $_SESSION["menu"][0] ?></a>
    <a href="example.php" style="margin-right:30px" class="title"><?php echo $_SESSION["menu"][1] ?></a>
    <a href="Designer.php" style="margin-right:30px" class="title"><?php echo $_SESSION["menu"][2] ?></a>
    <a href="introduction.php" style="margin-right:30px" class="title"><?php echo $_SESSION["menu"][3] ?></a>
    <a href="index.php" style="margin-right:30px" class="title"><?php echo $_SESSION["menu"][4] ?></a>
  </div>
</div>



<div class="bottom" align="center">
  <a class="user_behave" style="margin-right:90px" href="login.php">登录</a>
  <a class="user_behave" style="margin-left:0px" href="http://www.baidu.com">注册</a>
  <p align="center" class="address">中国重庆市渝中区邹容路38号2-3-2 400010</p>
</div>

</body>
</html>
