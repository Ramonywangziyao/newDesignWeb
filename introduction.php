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

<div class="header">
  <div class="logo">
    <p class="icon">NEW DESIGN</p>
  </div>
  <div class="menu">
    <a href="http://www.baidu.com" style="margin-right:180px" class="title"><?php echo $_SESSION["menu"][0] ?></a>
    <a href="http://www.baidu.com" style="margin-right:30px" class="title"><?php echo $_SESSION["menu"][1] ?></a>
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
