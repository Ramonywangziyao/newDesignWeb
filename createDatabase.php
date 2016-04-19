<?php
  $user = 'root';
  $pass = '';
  $link = new mysqli('localhost', $user, $pass);
  if ($link->connect_error) {
    die("Connection failed: " . $link->connect_error);
  }
  $sql = 'CREATE DATABASE newdesign';
  if ($link->query($sql) === TRUE) {
    echo "Database created successfully";
  } else {
    echo "Error creating database: " . $conn->error;
  }
  $sql = 'CREATE TABLE Users(account TEXT,password TEXT)';
  if ($link->query($sql) === TRUE) {
    echo "Table created successfully";
  } else {
    echo "Error creating database: " . $conn->error;
  }
  $sql = "INSERT INTO newdesign (account,password) VALUES ('admin', '950706')";
  if ($link->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  $link->close();
?>
