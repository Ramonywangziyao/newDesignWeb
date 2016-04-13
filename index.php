<?php
    session_start();
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
<div class="welcome" align="center">

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
  <a class="user_behave" id="login" style="margin-right:90px" href="login.php">登录</a>
  <a class="user_behave" id="register" style="margin-left:0px" href="http://www.baidu.com">注册</a>
  <p align="center" class="address">中国重庆市渝中区邹容路38号2-3-2 400010</p>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script type="text/javascript">
(function(){
$lg = $('#login');
$regi = $("#register");
$('.bottom').on('click','#logout',function(){
    $('#accountName').remove();
    $('#logout').remove();
    $('.bottom').append("<a class='user_behave' id='login' style='margin-right:90px' href='login.php'>登录</a>");
    $('.bottom').append("<a class='user_behave' id='register' style='margin-left:0px' href='http://www.baidu.com'>注册</a>");
    $('.bottom').append("<p align='center' class='address'>中国重庆市渝中区邹容路38号2-3-2 400010</p>");
    <?php $_SESSION["logedin"] = "no";  ?>
});
function logined(){
  $lg.remove();
  $('.address').remove();
  $regi.remove();
  $('.bottom').append("<p align='center' class='user_behave' id='accountName' style='margin-right:90px'>欢迎回来! 感谢您选择我们公司！</p>");
  $('.bottom').append("<a class='logout' id='logout' style='margin-left:0px'>登出</a>")
  }


<?php
function logout(){
  $_SESSION["logedin"] = "no";
}
if($_SESSION["logedin"]==true)
{
  echo "logined();";
}
?>
})();
</script>
</body>
</html>
