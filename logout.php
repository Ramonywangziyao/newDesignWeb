<?php
session_start();
$_SESSION["logedin"] = 'no';
header('Location: index.php');
?>
