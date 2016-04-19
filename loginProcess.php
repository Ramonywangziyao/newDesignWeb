<?php
	session_start();
	if($_SERVER["REQUEST_METHOD"] == "POST")
	{
		if(isset($_POST))
		{
			$account = trim($_POST["account"]);
			$password = trim($_POST["password"]);
			if($account!=NULL&&$password!=NULL)
			{
				$user = 'root';
				$pass = '';
				$dbName = 'newdesign';
				$db = new mysqli('localhost',$user,$pass,$dbName);
				$sql = "SELECT * FROM Users WHERE account = '{$account}' and password = '{$password}'";
				$result = $db->query($sql);
				if($result->num_rows > 0)
				{
      		$_SESSION["logedin"] = "true";
					$_SESSION["username"] = $account;
					$_SESSION["error"] = '';
					header('Location: index.php');
				}
				else
				{
      		$_SESSION["error"] = "account or password is wrong!";
					header('Location: login.php');
	   		}
  		}
  		else {
    		header('Location: login.php');
  		}
		}
	}
	$db->close();
?>
