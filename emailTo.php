<?php
  $name = $_POST['name'];
  $responEmail = 'a';//$_POST['email'];
  $message = $_POST['message'];
  $emailFrom = 'tonywangziyao@gmail.com';
  $subject = 'New Request from Customer';
  $emailContent = 'A new request by a customer\nEmail: $responEmail \nMessage: $message\n';
  $toEmail = 'tonywangziyao@gmail.com';
  $header = 'From:NOUS Studio Request\r\n';
  mail($toEmail,$subject,$emailContent,$header);
  echo "sucess";
 ?>
