<?php
  $name = "ziyao";
  $responEmail = 'a';//$_POST['email'];
  $message = "aa";
  $emailFrom = 'tonywangziyao@gmail.com';
  $subject = 'New Request from Customer';
  $emailContent = 'A new request by a customer\nEmail: $responEmail \nMessage: $message\n';
  $toEmail = 'tonywangziyao@gmail.com';
  $header = 'From:NOUS Studio Request\r\n';
  mail($toEmail,$subject,$emailContent,$header);
  echo "sucess";
 ?>
//trying to do the send email request. But just no time to make the layout. Final week...But this code should work.
