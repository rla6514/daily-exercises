<?php
/* / define('MY_SERVER', 'Apache');




  $my_greeting = '<p>Hello, World!</p>';

  var_dump($my_greeting);
  exit();

   function my_first_function() {
    $my_greeting = '<p>Hello yunyong</p>';

    echo $my_greeting;
  } 

  echo $my_greeting;

  echo '<br/>'

   my_first_function(); 
   echo '<br/>'

  echo $my_greeting;  */

  $first_name = 'Yunyong';
  $last_name = 'Kim';
  echo 'First Name: ', $first_name;
  echo '<br/>';
  echo 'Surname: ', $last_name,'<br/>';



  $year_of_birth = 1988;
  $height = 179;
  echo 'Year of birth: ', $year_of_birth;
  echo '<br/>';
  echo 'Height', $height,'cm','<br/>';


  define('SERVER_SOFTWARE', 'Apache');
  echo 'This server is running on ', SERVER_SOFTWARE,'<br/>'; 

  define('MY_OS', 'Windows');
  echo 'My operating system is ', MY_OS,'<br/>';

/*   function greet () {
    echo 'Hello Wrold!';
  }
  echo greet(); */

/*   function greet ($whom) {
    
    echo 'Hello ', $whom;
  }
  greet('Prague'); */

  function greet ($whom) {
  
    return "Hello , $whom";
  }
echo greet('Prague');
?>

