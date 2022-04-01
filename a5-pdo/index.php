<?php
  $host = getenv('MYSQL_HOST');
  $db   = getenv('MYSQL_DATABASE');
  $user = getenv('MYSQL_USER');
  $pswd = getenv('MYSQL_PASSWORD');


  try {
    $conn = new PDO("mysql:host=$host;dbname=$db", $user, $pswd);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    printf("Connected to server version: %s\n", $conn->getAttribute(PDO::ATTR_SERVER_VERSION));
    $conn = null;
  } catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }
?>
