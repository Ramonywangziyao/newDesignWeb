<?php

    session_start();
    $_SESSION["usname"]='';
    $_SESSION["psword"]='';
    $_SESSION["error"]='';
    $_SESSION["loggedin"]='';

?>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="css/login.css">
<title>Lijie Wang's Company</title>
</head>
<body class="general">

<!-- header  -->
<div class="login" align="center">
  <form align="right" style="color:black;font-family:sans-serif;font-size:1.2em" method="POST" action="loginProcess.php">
    <b>账号</b><input style="margin-top:100px" class="loginForm" type="text" name="account"></br>
    <b>密码</b><input class="loginForm" type="password" name="password"></br>
    <input class="loginbutton" type="submit" value="" align="center">
  </form>
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


</body>
</html>
