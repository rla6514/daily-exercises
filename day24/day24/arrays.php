<?php
/* $array = [1, 2, 3];

var_dump($array);

$array = [
  'a' => 1, 
  'b' => 2,
  'c' => 3];

  var_dump($array); */

/*   $cars_i_want = [
  'Aston Martin',
  'Bugatti',
  'Ferrari',
  'Lamborghini',
  'Maserati',
  'Mercedes',
  'Porsche',
  'Skoda',
]; */

/* $cars_i_want = [
  1 => 'Aston Martin',
  2 =>'Bugatti',
  3 => 'Ferrari',
  4 => 'Lamborghini',
  5 => 'Maserati',
  6 => 'Mercedes',
  7 =>'Porsche',
  8 =>'Skoda',
];
  
echo 'For myself I would buy ', $cars_i_want[1], '. <br>'; 
echo 'For my spouse I would buy ',$cars_i_want[3], '.<br>';
$cars_i_want[4] = 'Smart';
echo 'Each of my kids will get a ' ,$cars_i_want[4], '.<br>';

foreach ($cars_i_want as $value) {
  
echo '<li>' ,$value, '</li>' ;
}

var_dump($cars_i_want); */

$car_prices = [
  'Skoda Octavia' => 270000,
  'Volkswagen Golf' => 170000,
  'BMW X6' => 380000,
  'Porsche 911' => 1150000
];

foreach ($car_prices as $key => $value) {
  echo 'The price of ' ,$key, ' is ' ,$value,  'CZK.<br>';
}



?>