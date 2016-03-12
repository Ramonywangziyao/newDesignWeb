<?php

    session_start();
    $_SESSION["menu"] = array("Contact", "Sample","Desginer","Introduction","Home");
    ?>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="css/mainStyle.css">
<title>Lijie Wang's Company</title>
</head>
<body class="general">

<!-- header  -->
<div class="welcome" align="center">
</div>
<div class="header">
  <div class="logo">
    <p class="icon">NEW DESIGN</p>
  </div>
  <div class="menu">
    <a href="http://www.baidu.com" style="margin-right:180px" class="title"><?php echo $_SESSION["menu"][0] ?></a>
    <a href="http://www.baidu.com" style="margin-right:30px" class="title"><?php echo $_SESSION["menu"][1] ?></a>
    <a href="http://www.baidu.com" style="margin-right:30px" class="title"><?php echo $_SESSION["menu"][2] ?></a>
    <a href="http://www.baidu.com" style="margin-right:30px" class="title"><?php echo $_SESSION["menu"][3] ?></a>
    <a href="index.php" style="margin-right:30px" class="title"><?php echo $_SESSION["menu"][4] ?></a>
  </div>
</div>
<div class="bottom" align="center">
  <a class="user_behave" style="margin-right:90px" href="login.php">Log in</a>
  <a class="user_behave" style="margin-left:0px" href="http://www.baidu.com">Sign up</a>
  <p align="center" class="address">#312 2-3 Minsheng Road   Yuzhong District   Chongqing   China   400010</p>
</div>

</body>
</html>
