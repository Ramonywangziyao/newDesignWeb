<?php
    session_start();
?>
<script type="text/javascript">
  var li = "<?php echo $_SESSION["logedin"]; ?>";
  if(li=="true")
  {
    $('#login').html("欢迎回来, <?php echo $_SESSION["username"];?>");
    $('#login').removeAttr("href");
    $('#login').css('position','relative');
    $('#login').css('margin','auto');
    $('#login').css('left','17px');
    $('#register').css('visibility','hidden');
    $('.address').css('visibility','hidden');
    $('.bottom').append("<a class='logout' id='lo' href='logout.php'>登出</a>");
  }
  else {
    $('#login').html("登录");
    $('#login').attr("href","login.php");
    $('#login').attr('class','user_behave');
    $('#register').css('visibility','visible');
    $('.address').css('visibility','visible');
    $('#lo').remove();
  }
</script>
