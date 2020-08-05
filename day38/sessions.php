<?php

session_start();

if($_POST) {
  $email = $_POST['email'] ?? null;

  $email = !empty($_POST['email']) ? $_POST['email'] : null;

  if (isset($_POST['email']) && $_POST['email']) {
    $email = $_POST['email'];
  } else {
    $email = null;
  }

  $password = $_POST['password'] ?? null;

  $query = "
  SELECT *
  FROM `user`
  WHERE `email` = $email
  ";

  $stored_password_hash;

  $submitted_password_hash = password_hash($password, PASSWORD_BCRYPT);


  if (0 === strcmp($stored_password_hash, $submitted_password_hash)) {
    $_SESSION['logged_in_user'] = 1;
  } else {

  }

}

    unset($_SESSION['logged_in_user']);

// $_SESSION['start'] = date('H:i:s');

var_dump($_SESSION);
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
  <form action="" method="post">
    <input type="email" name="email" placeholder="Email">
    <br>
    <br>

    <input type="password" name="password" placeholder="Password">
  
  </form>
</body>
</html>