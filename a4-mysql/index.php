<?php
  $host = getenv('MYSQL_HOST');
  $user = getenv('MYSQL_USER');
  $pswd = getenv('MYSQL_PASSWORD');

  $conn = new mysqli($host, $user, $pswd);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  printf("Connected to server version: %d\n", $conn->server_version);

  $conn->close();
?>
