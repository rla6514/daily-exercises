<?php

var_dump($_GET);

var_dump(isset($_GET['page']));

var_dump(empty($_GET['page']));

var_dump($_POST);

$first_name = isset ($_POST['first_name']) ? $_POST['first_name'] : '';
$email = $_POST['email'] ?? '';
$email = !empty($_POST['email']) ?  $_POST['email'] : '';


?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GET & POST</title>
</head>
<body>
  
  <form action="" method="post">
    <input type="text" name="first_name" value="<?php echo $first_name ?>">
    <br>
    <br>

    <input type="email" name="email" vlaue="<?php $email ?>">
    <br>
    <br>

    <input type="submit" name="Submit the form!">



  </form>

</body>
</html>